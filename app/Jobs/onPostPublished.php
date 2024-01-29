<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class onPostPublished implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    //public $timeout = 1;
    //public $tries = 1;
    //public $backoff = [2, 10]; //when job fails worker wait 2 seconds to try again
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //throw new \Exception('failed!');
        //sleep(3);

        info('HTW');
    }
    //run code when the job fails
    //public function failed($e)
    //{

    //}

    //public function retryUntil()
    //{
        //return now()->addMinute();
    //}
}
