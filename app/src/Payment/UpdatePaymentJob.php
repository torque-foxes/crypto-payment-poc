<?php

namespace App\Payment;

use Exception;
use SilverStripe\Core\Environment;
use SilverStripe\SiteConfig\SiteConfig;
use Symbiote\QueuedJobs\Services\AbstractQueuedJob;

class UpdatePaymentJob extends AbstractQueuedJob
{

    use UpdatePaymentTrait;

    public function __construct($txId = '')
    {
        parent::__construct();

        $this->txId = $txId;
    }

    public function getTitle()
    {
        return 'Update single payment transaction';
    }

    public function process()
    {
        $this->updatePaymentTransaction();
        $this->addMessage('Transaction updated');
        $this->isComplete = true;
    }

    public function updatePaymentTransaction()
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
                // match the transaction address from the ajax request
                foreach ($data as $item) {
                    if ($item->hash === $this->txId) {
                        $this->createTransaction($item);
                    }
                }
            } else {
                $this->createTransaction($data);
            }
        }
    }
}
