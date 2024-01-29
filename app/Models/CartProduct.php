<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
//use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property int $cart_id
 * @property int $product_id
 * @property string $created_at
 * @property string $updated_at
 * @property Cart $cart
 * @property Product $product
 */
class CartProduct extends Model
{
    //use HasFactory;
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'cart_product';

    /**
     * @var array
     */
    //protected $fillable = ['cart_id', 'product_id', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function cart()
    {
        return $this->belongsTo('App\Models\Cart');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }
}
