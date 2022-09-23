<?php

namespace App\Payment;

use Omnipay\Omnipay;
use SilverStripe\Core\Convert;
use SilverStripe\Core\Environment;
use SilverStripe\ORM\FieldType\DBDatetime;

trait UpdatePaymentTrait
{
    private \Omnipay\Etherscan\Gateway $gateway;

    public function initializeGateway(): void
    {
        $this->gateway = Omnipay::create('Etherscan');

        $this->gateway->initialize([
            'api_key' => Environment::getEnv('ETHERSCAN_API_KEY'),
            'network' => Environment::getEnv('ETHERSCAN_NETWORK'),
        ]);
    }

    public function createTransaction($item): void
    {
        // If transaction already exists, just update
        if ($item->hash) {
            $tx = AccountTransaction::get()->filter('TransactionHash', $item->hash)->first();
            if ($tx instanceof AccountTransaction) {
                $this->updateTransaction($tx, $item);
                return;
            }
        }

        // create new transaction
        $txValue = 0;
        $txFee = 0;
        // value is in Wei units, convert to Eth
        if ($item->value > 0) {
            $txValue = (float)$item->value / (float)AccountTransaction::ETH_TO_WEI;
        }

        // transaction fee is gas price x gas units
        if ($item->gasPrice > 0 and $item->gas > 0) {
            $gasPrice = (float)$item->gasPrice / AccountTransaction::ETH_TO_WEI; // convert to Eth
            $txFee = ($gasPrice * (float)$item->gas);
        }

        $transaction = AccountTransaction::create([
            'TransactionTime' => DBDatetime::create()->setValue($item->timeStamp)->getValue() ?? DBDatetime::now(),
            'TransactionHash' => $item->hash ?? '',
            'TransactionBlock' => Convert::raw2sql((int)($item->blockNumber)) ?? 0,
            'TransactionStatus' => Convert::raw2sql((bool)$item->{'txreceipt_status'}) ? 'success' : 'fail',
            'TransactionFrom' => $item->from ?? '',
            'TransactionTo' => $item->to ?? '',
            'TransactionValue' => Convert::raw2sql($txValue) ?? 0,
            'TransactionGasPrice' => Convert::raw2sql($gasPrice) ?? 0,
            'TransactionGasUsed' => Convert::raw2sql($item->gas) ?? 0,
            'TransactionFee' => Convert::raw2sql($txFee) ?? 0,
        ]);

        $transaction->write();
    }

    /**
     * @param AccountTransaction $tx
     * @param \stdClass $item
     * @return void
     */
    protected function updateTransaction($tx, $item)
    {
        $txValue = 0;
        $txFee = 0;
        // value is in Wei units, convert to Eth
        if ($item->value > 0) {
            $txValue = (float)$item->value / (float)AccountTransaction::ETH_TO_WEI;
        }

        // transaction fee is gas price x gas units
        if ($item->gasPrice > 0 and $item->gas > 0) {
            $gasPrice = (float)$item->gasPrice / AccountTransaction::ETH_TO_WEI; // convert to Eth
            $txFee = ($gasPrice * (float)$item->gas);
        }

        $tx->TransactionTime = DBDatetime::create()->setValue($item->timeStamp)->getValue() ?? DBDatetime::now();
        $tx->TransactionHash = $item->hash ?? '';
        $tx->TransactionBlock = Convert::raw2sql((int)($item->blockNumber)) ?? 0;
        $tx->TransactionStatus = Convert::raw2sql((bool)$item->{'txreceipt_status'}) ? 'success' : 'fail';
        $tx->TransactionFrom = $item->from ?? '';
        $tx->TransactionTo = $item->to ?? '';
        $tx->TransactionValue = Convert::raw2sql($txValue) ?? 0;
        $tx->TransactionGasPrice = Convert::raw2sql($gasPrice) ?? 0;
        $tx->TransactionGasUsed = Convert::raw2sql($item->gas) ?? 0;
        $tx->TransactionFee = Convert::raw2sql($txFee) ?? 0;

        $tx->write();
    }
}
