<?php 

namespace App\Http\Livewire\Events;

trait SinglePageEventSystem
{
	public function strains()
    {
        $this->emit('upStrains');
    }
    public function products()
    {
        $this->emit('upProducts');
    }
    public function login()
    {
        $this->emit('upLogin');
    }
    public function profiles()
    {
        $this->emit('upProfiles');
    }
    public function token()
    {
        $this->emit('upToken');
    }
	public function strainsX()
    {
        $this->currentComponent = 'strains';
    }
    public function productsX()
    {
    	$this->currentComponent = 'products';
    }
    public function loginX()
    {
    	$this->currentComponent = 'login';
    }
    public function profilesX()
    {
    	$this->currentComponent = 'profiles';
    }
    public function tokenX()
    {
    	$this->currentComponent = 'token';
    }
}