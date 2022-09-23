<?php

namespace App\Payment;

use PageController;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Core\Injector\Injector;
use SilverStripe\ORM\FieldType\DBDatetime;
use SilverStripe\ORM\ValidationException;
use Symbiote\QueuedJobs\Services\QueuedJobService;

class PaymentPageController extends PageController
{

    private static array $allowed_actions = [
        'updateTransaction',
    ];

    /**
     * Create a queuedjob to update @see AccountTransaction
     */
    public function updateTransaction(HTTPRequest $request)
    {
        $startAfter = DBDatetime::now()->Rfc2822();
        $job = Injector::inst()->create(UpdatePaymentJob::class, $request->getVar('tx'));
        $queuedJobService = QueuedJobService::singleton();

        try {
            $queuedJobService->queueJob($job, $startAfter);
        } catch (ValidationException $e) {
        }
    }

}
