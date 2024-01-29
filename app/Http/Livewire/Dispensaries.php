<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Dispensary;
use App\Models\Menu;
use Illuminate\Support\Carbon;
use App\Http\Livewire\DataTable\WithSorting;
use App\Http\Livewire\DataTable\WithCachedRows;
use App\Http\Livewire\DataTable\WithBulkActions;
use App\Http\Livewire\DataTable\WithPerPagePagination;
use Mattlibera\LivewireFlash\LivewireFlashNotifier;
use Mattlibera\LivewireFlash\LivewireFlash;
use Mattlibera\LivewireFlash\Message;
use Illuminate\Support\Facades\Auth;

class Dispensaries extends Component
{
    use WithPerPagePagination, WithSorting, WithBulkActions, WithCachedRows;

    public $showDeleteModal = false;
    public $showEditModal = false;
    public $showFilters = false;
    public $filters = [
        'search' => '',
        'company_name' => '',
        'city' => '',
        'state' => '',
        'zip' => 0
    ];
    public $user_role_id = [];
    public $curr_user;

    public Dispensary $editing;

    protected $queryString = ['sorts'];

    protected $listeners = ['refreshDispensaries' => '$refresh'];

    public function rules() { return [
        'editing.company_name' => 'required|min:3',
        'editing.menu_num_id' => 'required',
        'editing.status' => 'required|in:'.collect(Dispensary::STATUSES)->keys()->implode(','),
        'editing.city' => 'required',
        'editing.state' => 'required',
        'editing.zip' => 'required'
    ]; }

    public function mount()
    {
        $x = Auth::user();
        $this->curr_user = $x->username;
        array_push($this->user_role_id, $x->role_member);
        array_push($this->user_role_id, $x->role_netmin);
        array_push($this->user_role_id, $x->role_cloudmin);
        array_push($this->user_role_id, $x->role_datamin);
        $this->editing = $this->makeBlankDispensary();
    }
    public function updatedFilters() { $this->resetPage(); }

    //public function exportSelected()
    //{
        //return response()->streamDownload(function () {
            //echo $this->selectedRowsQuery->toCsv();
        //}, 'dispensaries.csv');
    //}

    public function deleteSelected()
    {
        $deleteCount = $this->selectedRowsQuery->count();

        $this->selectedRowsQuery->delete();

        $this->showDeleteModal = false;

        $this->notify('You\'ve deleted '.$deleteCount.' dispensaries');
    }

    public function makeBlankDispensary()
    {
        return Dispensary::make(['menu_num_id' => '', 'company_name' => '', 'email_address' => '', 'status' => 'success', 'city' => '', 'state' => '', 'zip' => '']);
    }

    public function makeMenu($i)
    {
        $dispensary = Dispensary::where('id', $i)->first();
        if(Menu::create(['status' => 'success', 'menu_id' => $dispensary->menu_num_id, 'name' => $dispensary->company_name])){
            flash('Menu Added Successfully!! (: ')->livewire($this);
        }
        return;
    }


    public function toggleShowFilters()
    {
        $this->useCachedRows();

        $this->showFilters = ! $this->showFilters;
    }

    public function create()
    {
        $this->useCachedRows();

        if ($this->editing->getKey()) $this->editing = $this->makeBlankDispensary();

        $this->showEditModal = true;
    }

    public function edit(Dispensary $dispensary)
    {
        $this->useCachedRows();

        if ($this->editing->isNot($dispensary)) $this->editing = $dispensary;

        $this->showEditModal = true;
    }

    public function save()
    {
        $this->validate();

        $this->editing->save();

        $this->showEditModal = false;
    }

    public function resetFilters() { $this->reset('filters'); }

    public function getRowsQueryProperty()
    {
        $query = Dispensary::query()
            ->when($this->filters['company_name'], fn($query, $company_name) => $query->where('company_name', $company_name))
            ->when($this->filters['city'], fn($query, $city) => $query->where('city', $city))
            ->when($this->filters['state'], fn($query, $state) => $query->where('state', $state))
            ->when($this->filters['zip'], fn($query, $zip) => $query->where('zip', $zip))
            ->when($this->filters['search'], fn($query, $search) => $query->where('company_name', 'like', '%'.$search.'%'));

        return $this->applySorting($query);
    }

    public function getRowsProperty()
    {
        return $this->cache(function () {
            return $this->applyPagination($this->rowsQuery);
        });
    }

    public function render()
    {
    	//return view('livewire.dispensaries');
        return view('livewire.dispensaries', [
            'dispensaries' => $this->rows,
        ])
        ->layout('layouts.app');
    }

    // public function logout()
    // {
    //     Session::flush();
    //     Auth::logout();
    //     return redirect('/');
    // }
}
