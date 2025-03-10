<?php

namespace Skynettechnologies\AllinOneAccessibility;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Formatter\Formatter;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Flarum\User\UserRepository;
use Illuminate\Contracts\Events\Dispatcher;
use Tobscure\JsonApi\Document;
use Psr\Http\Message\ServerRequestInterface;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class ForumAttributes
{
    protected $settings;
    protected $formatter;
    protected $client;
    public function __construct(SettingsRepositoryInterface $settings, Formatter $formatter)
    {
        $this->settings = $settings;
        $this->formatter = $formatter;
        $this->client = new Client();;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        // Get domain with full path
        $domain = $_SERVER['HTTP_HOST'] ?? 'unknown-domain.com';
//        $path = $_SERVER['REQUEST_URI'] ?? '/';
//        $fullUrl = $protocol . "://" . $domain . $path;
        // Convert domain to Base64
        $base64Domain = base64_encode($domain);
        $actor = $serializer->getActor();
        if ($actor->isAdmin()) {
            $name = $actor->username;
            $email = $actor->email;
        } else {
            $admin = User::where('is_admin', true)->first();
            $name = $admin ? $admin->username : 'Unknown Admin';
            $email = $admin ? $admin->email : 'admin@example.com';
        }
        $message = '';
        $response = $this->client->post('https://ada.skynettechnologies.us/api/get-autologin-link', [
            'json' => ['website' => $base64Domain],
            'headers' => ['Content-Type' => 'application/json'],
        ]);
        $AutologinLink = json_decode($response->getBody()->getContents(), true);
        if (isset($AutologinLink['status']) && $AutologinLink['status'] == 0) {
            $arr_details = [
                'name' => $name,
                'email' => $email,
                'company_name' => '',
                'website' => $base64Domain,
                'package_type' => 'free-widget',
                'start_date' => date('Y-m-d H:i:s'),
                'end_date' => '',
                'price' => '',
                'discount_price' => '0',
                'platform' => 'Flarum',
                'api_key' => '',
                'is_trial_period' => '',
                'is_free_widget' => '1',
                'bill_address' => '',
                'country' => '',
                'state' => '',
                'city' => '',
                'post_code' => '',
                'transaction_id' => '',
                'subscr_id' => '',
                'payment_source' => '',
            ];
            // ✅ Step 1: Add User Domain
            $addUserDomainResponse = $this->client->post('https://ada.skynettechnologies.us/api/add-user-domain', [
                'json' => $arr_details,
                'headers' => ['Content-Type' => 'application/json'],
            ]);

            $addUserDomainData = json_decode($addUserDomainResponse->getBody()->getContents(), true);

            if (isset($addUserDomainData['status']) && $addUserDomainData['status'] === 0) {
                $message = "User domain added successfully.";
            } else {
                $message = "Failed to add user domain. Response: " . json_encode($addUserDomainData);
            }
            // ✅ Step 3: Call Autologin API Again
            $autologinResponse = $this->client->post('https://ada.skynettechnologies.us/api/get-autologin-link', [
                'json' => ['website' => $base64Domain],
                'headers' => ['Content-Type' => 'application/json'],
            ]);
            $autologinData = json_decode($autologinResponse->getBody()->getContents(), true);
            if (isset($autologinData['status']) && $autologinData['status'] === 1) {
                $message = "Autologin link generated successfully.";
            } else {
                $message = "Failed to generate Autologin link.";
            }
            $widgetSettingsResponse = $this->client->post('https://ada.skynettechnologies.us/api/widget-settings-platform', [
                'json' => ['website_url' => $domain],
                'headers' => ['Content-Type' => 'application/json'],
            ]);
            $widgetSettingsData = json_decode($widgetSettingsResponse->getBody()->getContents(), true);
            if (isset($widgetSettingsData['status'])) {
                $message = "Widget Setting Saved Successfully.";
            } else {
                $message = "Failed to save Widget setting.";
            }
        }
        return [
            'allinoneaccessibilityColorCode' => $this->settings->get('skynettechnologies-all-in-one-accessibility.aioacolor_codeHtml', '#420083'),
            'allinoneaccessibilityPositionSwitcher' => $this->settings->get('skynettechnologies-all-in-one-accessibility.aioa_custom_position_switcher', '0'),
            'allinoneaccessibilityIconPosition' => $this->settings->get('skynettechnologies-all-in-one-accessibility.aioa_iconposition', 'top-left'),
            'customPositionXValue' => $this->settings->get('skynettechnologies-all-in-one-accessibility.custom_position_x_value', '0'),
            'customPositionXDirection' => $this->settings->get('skynettechnologies-all-in-one-accessibility.custom_position_x_direction', 'to_the_right'),
            'customPositionYValue' => $this->settings->get('skynettechnologies-all-in-one-accessibility.custom_position_y_value', '0'),
            'customPositionYDirection' => $this->settings->get('skynettechnologies-all-in-one-accessibility.custom_position_y_direction', 'to_the_bottom'),
            'allinoneaccessibilitywidgetSize' => $this->settings->get('skynettechnologies-all-in-one-accessibility.aioa_widget_size_title', 'aioa_widget_regularsize'),
            'allinoneaccessibilityIconType' => $this->settings->get('skynettechnologies-all-in-one-accessibility.aioa_icon_type', 'aioa-icon-type-1'),
            'allinoneaccessibilitySizeSwitcher' => $this->settings->get('skynettechnologies-all-in-one-accessibility.aioa_custom_size_switcher', '0'),
            'message' => $message,
            'adminName' => $name,
            'adminEmail' => $email,
        ];
    }

    protected function formattedSetting(string $key, ServerRequestInterface $request): string
    {
        $value = $this->settings->get($key);
        return $value ? $this->formatter->render($value, null, $request) : '';
    }
}
