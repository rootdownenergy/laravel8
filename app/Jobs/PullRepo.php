<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
//use Illuminate\Bus\Batchable;
//use Illuminate\Contracts\Queue\ShouldBeUnique;
//use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class PullRepo implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

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
        //if($this->batch()->canceled()){
            //return;
        //}
        info('HTW PULL REPO');
    }
}
