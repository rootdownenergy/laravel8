<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Menu;
use App\Models\Strain;
use App\Models\Profile;
use Livewire\WithPagination;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class MenuStrain extends Component
{

    use WithPagination;

    public $ids;
    public $strain_name;
    public $strain_image;
    public $current_menu_id;
    public $dispensary_name;
    public $user_role_id = [];
    public $curr_user;
    //public Strain $strain;
    //public $i = [];

    public function mount()
    {
        $x = Auth::user();
        $this->curr_user = $x->username;
        array_push($this->user_role_id, $x->role_member);
        array_push($this->user_role_id, $x->role_netmin);
        array_push($this->user_role_id, $x->role_cloudmin);
        array_push($this->user_role_id, $x->role_datamin);
    }

    public function menu()
    {
        //$_menu_id = intval($current_menu_id);
        $x = Profile::where('menu_num_id', 'like', '%'.$this->current_menu_id.'%')->first();
        $this->dispensary_name = $x->company_name;
    }

    public function add($i)
    {
        $this->ids = $i;
        $x = intval($this->current_menu_id);
        Menu::find($x)->strains()->attach($this->ids);
        //$v = Menu::find($x);
        //foreach ($v->strains as $s) {
              //$i = $s->id;
        //}
        dd($x);
    }

    public function read()
    {
        return Strain::simplePaginate(12);
    }

    public function render()
    {
        return view('livewire.menus.menu', [
            'strains' => $this->read(),
        ]);
    }
    // public function logout()
    // {
    //     Session::flush();
    //     Auth::logout();
    //     return redirect('/');
    // }
}
