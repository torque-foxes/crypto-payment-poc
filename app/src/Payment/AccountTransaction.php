<?php

namespace App\Payment;

use SilverStripe\ORM\DataObject;

class AccountTransaction extends DataObject
{
    /**
     * Conversion of 1 Eth to Wei unit
     */
    public const ETH_TO_WEI = 1000000000000000000;

    private static $table_name = 'AccountTransaction';

    private static array $db = [
        'TransactionTime' => 'Varchar(255)',
        'TransactionHash' => 'Varchar(255)',
        'TransactionBlock' => 'Int',
        'TransactionStatus' => 'Varchar(32)',
        'TransactionFrom' => 'Varchar(255)',
        'TransactionTo' => 'Varchar(255)',
        'TransactionValue' => 'Varchar(255)',
        'TransactionGasPrice' => 'Varchar(255)',
        'TransactionGasUsed' => 'Varchar(255)',
        'TransactionFee' => 'Varchar(255)',
    ];

    private static $summary_fields = [
        'TransactionTime' => 'Date',
        'TransactionHash' => 'Transaction',
        'TransactionValue' => 'Value (Eth)',
    ];

    public function canEdit($member = null)
    {
        return false;
    }

    public function canDelete($member = null)
    {
        return false;
    }

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->dataFieldByName('TransactionValue')->setDescription('value in Eth');
        $fields->dataFieldByName('TransactionGasPrice')->setDescription('value in Eth');
        $fields->dataFieldByName('TransactionGasUsed')->setDescription('units of gas used');
        $fields->dataFieldByName('TransactionFee')->setDescription('value in Eth');

        return $fields;
    }
}
