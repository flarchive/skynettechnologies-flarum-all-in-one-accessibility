<?php

namespace Skynettechnologies\AllinOneAccessibility;

use Flarum\Formatter\Formatter;
use Flarum\Settings\Event\Saving;

class ParseSettings
{
    public function handle(Saving $event)
    {
        foreach ($event->settings as $key => $value) {
            if ($key !== 'skynettechnologies-all-in-one-accessibility.guestContent' && $key !== 'skynettechnologies-all-in-one-accessibility.memberContent') {
                continue;
            }
            if (empty($value)) {
                $event->settings[$key] = null;
                continue;
            }
            /**
             * @var $formatter Formatter
             */
            $formatter = resolve(Formatter::class);

            $event->settings[$key] = $formatter->parse($value);
        }
    }
}
