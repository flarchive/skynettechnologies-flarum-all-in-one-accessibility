<?php

namespace Skynettechnologies\AllinOneAccessibility;

use Flarum\Formatter\Formatter;
use Flarum\Settings\Event\Deserializing;

class UnparseSettings
{
    public function handle(Deserializing $event)
    {
        foreach ($event->settings as $key => $value) {
            if ($key !== 'skynettechnologies-all-in-one-accessibility.guestContent' && $key !== 'skynettechnologies-all-in-one-accessibility.memberContent') {
                continue;
            }

            if (empty($value)) {
                continue;
            }

            /**
             * @var $formatter Formatter
             */
            $formatter = resolve(Formatter::class);

            $event->settings[$key] = $formatter->unparse($value);
        }
    }
}
