<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CartProduct;

class CartProductSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	CartProduct::factory(16)->create();
    }
}
