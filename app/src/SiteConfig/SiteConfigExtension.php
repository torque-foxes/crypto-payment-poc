<?php

namespace App\SiteConfig;

use SilverStripe\Core\Environment;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataExtension;

class SiteConfigExtension extends DataExtension
{
    private static array $db = [
        'EtherscanApiKey' => 'Varchar(255)',
        'EtherscanNetwork' => 'Varchar(255)',
        'WalletAddress' => 'Varchar(255)'
    ];

    public function updateCMSFields(FieldList $fields): void
    {
        $fields->removeByName([
            'EtherscanApiKey',
            'EtherscanNetwork',
            'WalletAddress',
        ]);

        $fields->addFieldsToTab(
            'Root.Payment',
            [
                TextField::create(
                    'EtherscanApiKey',
                    'Etherscan API Key',
                    Environment::getEnv('ETHERSCAN_API_KEY') ?? ''
                )
                    ->setDescription(
                        'Add your Etherscan api key value, defaults to environment variable set if provided'
                    ),
                TextField::create(
                    'EtherscanNetwork',
                    'Etherscan Network',
                    Environment::getEnv('ETHERSCAN_NETWORK') ?? ''
                )
                    ->setDescription(
                        'Add Etherscan network, defaults to environment variable set if provided'
                    ),
                TextField::create(
                    'WalletAddress',
                    'Wallet address',
                    Environment::getEnv('WALLET_ADDRESS') ?? ''
                )
                    ->setDescription(
                        'Add wallet address, defaults to environment variable set if provided'
                    ),
            ]
        );
    }
}
