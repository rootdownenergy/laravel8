<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\CartProduct;

/**
 * @property int $id
 * @property string $name
 * @property int $price
 * @property string $created_at
 * @property string $updated_at
 * @property CartProduct[] $cartProducts
 */
class Product extends Model
{
    //use HasFactory;
    /**
     * @var array
     */
    protected $fillable = ['name', 'price', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function carts()
    {
        return $this->belongsToMany(CartProduct::class);
    }
}
