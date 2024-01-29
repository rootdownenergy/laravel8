<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Cart;
use App\Events\ProductUpdatedInCart;

class CartProduct extends Component
{

	public $ids;
	public $name;
	public $price;	

	public function listeners()
	{
	 	return $listeners = ['productUpdated:'.$this->id => '$refresh'];
	}
	public function mount($product)
	{
		$this->ids = $product->id;
		$this->name = $product->name;
		$this->price = $product->price;
	}

	public function add()
	{
		//auth->user-currentCart()	
		Cart::find(1)->products()->attach($this->ids);
		//$cart->products->attach($this->ids);
		$this->emit('productAdded');
		event(new ProductUpdatedInCart($this->id));
	}

	public function remove()
	{
		//auth->user-currentCart()	
		Cart::find(1)->products()->detach($this->ids);
		//$cart->products->attach($this->ids);
		$this->emit('productRemoved');
		event(new ProductUpdatedInCart($this->id));
	}


    public function render()
    {
        return view('livewire.cart-product', [
        	"alreadyAdded" => Cart::first()->products()->whereId($this->ids)->exists()
        ]);
    }
}
