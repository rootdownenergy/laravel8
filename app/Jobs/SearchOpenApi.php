<?php namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Wizaplace\Etl\Etl;
use Wizaplace\Etl\Extractors\Json;
use Wizaplace\Etl\Loaders\Insert;
use Wizaplace\Etl\Database\Manager;
use Wizaplace\Etl\Database\ConnectionFactory as Connect;

class SearchOpenApi implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $config1 = config('database.connections.mysql.host');
        $config2 = config('database.connections.mysql.database');
        $config3 = config('database.connections.mysql.username');
        $config4 = config('database.connections.mysql.password');
        $config = [
            'driver'    => 'mysql',
            'host'      => $config1,
            'port'      => '3306',
            'database'  => $config2,
            'username'  => $config3,
            'password'  => $config4,
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
        ];
        $manager = new Manager(new Connect());
        $manager->addConnection($config);
        $etl = new Etl();
        $extractor = new Json();
        $loader = new Insert($manager);

        $etl->extract($extractor, base_path('/storage/app/public/open_api_strains.json'))
            ->load($loader, 'open_api_strains')
            ->run();
    }
}
