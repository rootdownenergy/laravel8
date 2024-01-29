<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\Middleware\WithoutOverlapping;

class Deploy implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $site;
    public $latestCommitHash;
    public $connection = 'redis';
    public $queue = 'notifications';
    public $backoff = 30;
    public $timeout = 60;
    public $tries = 3;
    public $delay = 300;
    public $afterCommit = true;
    public $shouldBeEncrypted = true;

    public $uniqueid = 'products';
    public $uniqueFor = 10;

    // delete job
    public $deleteWhenMissingModels = true;


    public function uniqueId(){
        return $this->product->id;
    }
    /**
     * Create a new job instance.
     *
     * @return void
     */
    //public function __construct(Site $site, $latestCommitHash)
    //{
        //$this->site = $site;
        //$this->latestCommitHash = $latestCommitHash;
        //
    //}


    //public function uniqueId()
    //{
        //return 'deployments';
    //}

    public function uniqueFor()
    {
        return 60;
    }

    public function middleware()
    {
        return [
            new WithoutOverlapping('deployments', 10) 
        ];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //app()->make('deployer')
            //->deploy(
                //$this->latestCommitHash
            //);
        // special rate limiter functionality
        //Redis::throttle('deployments')
            //->allow(10) //limit the # of job instances
            //->every(60) //for this many seconds
            //->block(10)
            //->then(function (){
                //logic goes here
            //});
        //concurrency in jobs with redis and cache
        //Redis::funnel('deployments')
            //->limit(5) //limit the # of job
            //->block(10) //delay for 10 seconds to wait for block to be aquired
            //->then(function (){
                //logic goes here
            //});
        //avoid race condition
        //Cache::lock('deployments')->block(10, function (){

        //});
    }

    public function retryUntil(){
        return now()->addDay();
    }
}
