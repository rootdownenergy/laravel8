<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Cart;

class CartCounter extends Component
{
    public $counter;
	protected $listeners = [
        'productAdded' => 'updateCounter', 
        'productRemoved' => 'updateCounter'
    ];

    public function mount()
    {
        $this->counter = Cart::find(1)->products()->count();
    }

    public function render()
    {
        return view('livewire.cart-counter');
    }
    public function updateCounter()
    {
        $this->counter = Cart::find(1)->products()->count();
    }
}
