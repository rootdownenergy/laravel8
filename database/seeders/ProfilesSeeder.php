<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Profile;
use Faker\Generator as Faker;

class ProfilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $profiles = Profile::all();

        for ($i = 0; $i < $profiles->count(); $i++){
                DB::table('profiles')->where('id', '=', $i)->update([
                    'rating' => $faker->randomNumber()
                ]);
        }  
    }
}
