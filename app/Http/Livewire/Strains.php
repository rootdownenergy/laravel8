<?php

namespace App\Http\Livewire;

use App\Models\Strain;
use Livewire\Component;
use Livewire\WithPagination;
use Illuminate\Support\Facades\Auth;
use App\Http\Livewire\DataTable\WithCachedRows;

class Strains extends Component
{
    use WithPagination;

    public $showStrainDetailModal = false;
    public $curr_strain_name;
    public $curr_strain_id;
    public $curr_strain_image;

    public $opened;
    public $x;


    public function openModal($id)
    {

        $curr = Strain::where('id', 'like', '%'.$id.'%')->first();
        $this->fill(['curr_strain_name' => $curr->strain_name]);
        $this->fill(['curr_strain_image' => $curr->strain_image]);
        $this->opened = true;
    }

    public function closeModal()
    {
        $this->curr_strain_name = '';
        $this->curr_strain_image = '';
        $this->opened = false;
    }


    public function render()
    {
        return view('livewire.strains', [
            'strains' => Strain::paginate(12),
        ])->layout('layouts.guest');
    }
}
