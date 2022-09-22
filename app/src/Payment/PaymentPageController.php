<?php

namespace App\Payment;

use Exception;
use Omnipay\Omnipay;
use PageController;
use SilverStripe\Core\Convert;
use SilverStripe\Core\Environment;
use SilverStripe\ORM\FieldType\DBDatetime;
use SilverStripe\SiteConfig\SiteConfig;

class PaymentPageController extends PageController
{
    /**
     * Conversion of 1 Eth to Wei unit
     */
    public const ETH_TO_WEI = 1000000000000000000;

    private static array $url_handlers = [
        'all' => 'getAllTransactions',
        'single' => 'getTransaction'
    ];

    private static array $allowed_actions = [
        'getAllTransactions',
        'getTransaction',
    ];

    private \Omnipay\Etherscan\Gateway $gateway;

    public function initializeGateway(): void
    {
        $this->gateway = Omnipay::create('Etherscan');

        $this->gateway->initialize([
            'api_key' => Environment::getEnv('ETHERSCAN_API_KEY'),
            'network' => Environment::getEnv('ETHERSCAN_NETWORK'),
        ]);
    }

    public function getAllTransactions()
    {
        $this->initializeGateway();

        $siteConfig = SiteConfig::current_site_config();
        $wallet = $siteConfig->WalletAddress;

        try {
            $response = $this->gateway->fetchAccountTransaction(
                [
                    'address' => $wallet ?? Environment::getEnv('WALLET_ADDRESS')
                ]
            )->send();
        } catch (Exception $e) {
        }

        if (!is_null($response) && $response->isSuccessful()) {
            $data = $response->getData();
            if (is_array($data)) {
                foreach ($data as $item) {
                    $this->createTransaction($item);
                }
            } else {
                $this->createTransaction($data);
            }
        }

        $this->redirect($this->Link());
    }

    public function getTransaction()
    {
        $this->initializeGateway();

        $siteConfig = SiteConfig::current_site_config();
        $wallet = $siteConfig->WalletAddress;

        try {
            $response = $this->gateway->fetchAccountTransaction(
                [
                    'address' => $wallet ?? Environment::getEnv('WALLET_ADDRESS'),
                    'latest' => 1,
                ]
            )->send();
        } catch (Exception $e) {
        }

        if (!is_null($response) && $response->isSuccessful()) {
            $data = $response->getData();
            if (is_array($data)) {
                // only update the latest transaction
                $this->createTransaction($data[0]);
            } else {
                $this->createTransaction($data);
            }
        }

        $this->redirect($this->Link());
    }

    protected function createTransaction($item): void
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
            $txValue = (float)$item->value / (float)self::ETH_TO_WEI;
        }

        // transaction fee is gas price x gas units
        if ($item->gasPrice > 0 and $item->gas > 0) {
            $gasPrice = (float)$item->gasPrice / self::ETH_TO_WEI; // convert to Eth
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
            $txValue = (float)$item->value / (float)self::ETH_TO_WEI;
        }

        // transaction fee is gas price x gas units
        if ($item->gasPrice > 0 and $item->gas > 0) {
            $gasPrice = (float)$item->gasPrice / self::ETH_TO_WEI; // convert to Eth
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
