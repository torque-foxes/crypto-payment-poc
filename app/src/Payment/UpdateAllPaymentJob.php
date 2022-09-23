<?php

namespace App\Payment;

use Exception;
use SilverStripe\Core\Environment;
use SilverStripe\SiteConfig\SiteConfig;
use Symbiote\QueuedJobs\Services\AbstractQueuedJob;

class UpdateAllPaymentJob extends AbstractQueuedJob
{

    use UpdatePaymentTrait;

    public function getTitle()
    {
        return 'Update all payment transactions';
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
    }
}
