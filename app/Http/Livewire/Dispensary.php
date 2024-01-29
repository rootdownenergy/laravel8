<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Profile;
use App\Models\Menu;

class Dispensary extends Component
{
    public $current_id;

    public function mount($id)
    {
        $this->current_id = $id;
    }
    public function render()
    {
        $x = intval($this->current_id);
        //$i = Menu::find($x);
        //foreach($i->strains as $strain)
        //{
            //echo $strain;
        //}
        return view('livewire.dispensary', [
            'images' => Menu::find($x),
            'profile' => Profile::find($this->current_id)
        ])->layout('layouts.datatable');
    }
}
