<?php

namespace App\Payment;

use SilverStripe\ORM\DataObject;

class AccountTransaction extends DataObject
{
    private static $table_name = 'AccountTransaction';

    private static array $db = [
        'TransactionTime' => 'Varchar(255)',
        'TransactionHash' => 'Varchar(255)',
        'TransactionBlock' => 'Int',
        'TransactionStatus' => 'Boolean',
        'TransactionFrom' => 'Varchar(255)',
        'TransactionTo' => 'Varchar(255)',
        'TransactionValue' => 'Float',
        'TransactionGasPrice' => 'Float',
        'TransactionGasUsed' => 'Float',
        'TransactionFee' => 'Float',
    ];
}
