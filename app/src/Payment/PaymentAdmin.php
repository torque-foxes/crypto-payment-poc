<?php

namespace App\Payment;

use SilverStripe\Admin\ModelAdmin;
use SilverStripe\Forms\GridField\GridFieldConfig;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordViewer;
use SilverStripe\Forms\GridField\GridFieldExportButton;

class PaymentAdmin extends ModelAdmin
{
    private static $managed_models = [
        'payment' => [
            'title' => 'Payment',
            'dataClass' => AccountTransaction::class,
        ],
    ];

    private static string $url_segment = 'payment';
    private static float $menu_priority = 1;
    private static string $menu_title = 'Payment';
    private static string $menu_icon_class = 'font-icon-credit-card';

    public function getGridFieldConfig(): GridFieldConfig
    {
        $config = new GridFieldConfig_RecordViewer();
        $config->addComponents([
            new GridFieldExportButton('before'),
        ]);

        return $config;
    }
}
