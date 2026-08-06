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
        // Just return settings needed by the frontend — no API calls here
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
        ];
    }

    protected function formattedSetting(string $key, ServerRequestInterface $request): string
    {
        $value = $this->settings->get($key);
        return $value ? $this->formatter->render($value, null, $request) : '';
    }
}
