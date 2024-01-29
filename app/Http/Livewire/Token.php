<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Token extends Component
{

	public $isOpen = 0;
	public $x;

	public function mount()
	{
		// $this->x = 'THIS IS A TEST';
		// $this->closeModal();
        //$x = base_path('/storage/app/public/open_api_strains.json');
        //$x_array = json_decode(file_get_contents($x), true);


        //$json_to_array = array_map($json_origin);
        //var_dump($x_array['data']['0']['genetics']['names']);
	}
    public function create()
    {
        $this->openModal();
    }
    public function openModal()
    {
        $this->isOpen = true;
    }

    public function closeModal()
    {
        $this->isOpen = false;
    }
    public function render()
    {
        return view('livewire.token')
                ->layout('layouts.app');
    }
}
