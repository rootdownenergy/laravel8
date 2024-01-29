<?php namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Strain;

class SearchDropdown extends Component
{
    public $search;
    // protected $queryString = [
    //     'foo',
    //     'search' => ['except' => ''],
    //     'page' => ['except' => 1],
    // ];
    public function render()
    {
        $i = Strain::where('strain_name', 'like', '%'.$this->search.'%')->paginate(5);
        return view('livewire.search-dropdown', ['i' => $i]);
    }
}
