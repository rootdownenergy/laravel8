<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Product;

/**
 * @property int $id
 * @property string $created_at
 * @property string $updated_at
 * @property CartProduct[] $cartProducts
 */
class Cart extends Model
{
    //use HasFactory;
    /**
     * @var array
     */
    protected $fillable = ['created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
