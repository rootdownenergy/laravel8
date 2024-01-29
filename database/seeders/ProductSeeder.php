<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Num;
use App\Models\Product;
use App\Models\CartProduct;
use Faker;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	// Product::factory()
     //        ->times(20)
     //        ->hasAttached(
     //            CartProduct::factory()
     //            ->count(20)
     //        )
     //        ->create();
            $faker = Faker\Factory::create();

            $limit = 20;

            for ($i = 0; $i < $limit; $i++) {
                $newrow = Product::create ([
                    'name' => $faker->name,
                    'price' => $faker->unique()->randomDigit,
                ]);
           }
    }
}
