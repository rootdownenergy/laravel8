<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Strain;
use App\Http\Livewire\DataTable\WithSorting;
use App\Http\Livewire\DataTable\WithCachedRows;
use App\Http\Livewire\DataTable\WithBulkActions;
use App\Http\Livewire\DataTable\WithPerPagePagination;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class StrainList extends Component
{

    use WithPerPagePagination, WithSorting, WithBulkActions, WithCachedRows;

    public $showDeleteModal = false;
    public $showEditModal = false;
    public $showFilters = false;
    public $filters = [
        'search' => '',
        'strain_name' => '',
        'strain_menu_id' => '',
        'strain_type' => '',
    ];
    public $user_role_id = [];
    public $curr_user;

    public Strain $editing;

    protected $queryString = ['sorts'];

    protected $listeners = ['refreshStrainsList' => '$refresh'];

    public function rules() { return [
        'editing.strain_name' => 'required|min:3',
        'editing.status' => 'required|in:'.collect(Strain::STATUSES)->keys()->implode(','),
        'editing.thc' => 'required',
        'editing.cbd' => 'required',
        'editing.cbn' => 'required',
        'editing.strain_image' => 'required',
        'editing.strain_type' => 'required|min:3',
        'editing.strain_description' => 'required|min:3'
    ]; }

    public function mount()
    {
        $x = Auth::user();
        $this->curr_user = $x->username;
        array_push($this->user_role_id, $x->role_member);
        array_push($this->user_role_id, $x->role_netmin);
        array_push($this->user_role_id, $x->role_cloudmin);
        array_push($this->user_role_id, $x->role_datamin);
        $this->editing = $this->makeBlankStrain();
    }
    public function updatedFilters() { $this->resetPage(); }

    public function resetFilters() { $this->reset('filters'); }

    public function deleteSelected()
    {
        $deleteCount = $this->selectedRowsQuery->count();

        $this->selectedRowsQuery->delete();

        $this->showDeleteModal = false;

        $this->notify('You\'ve deleted '.$deleteCount.' strains');
    }

    public function makeBlankStrain()
    {
        return Strain::make(['strain_name' => '', 'strain_menu_id' => '', 'status' => 'success', 'strain_description' => 'thc', '' => 'cbd', '' => '', 'cbn' => '', 'strain_tag_words' => '', 'strain_image' => '', 'strain_type' => '']);
    }

    public function create()
    {
        $this->useCachedRows();

        if ($this->editing->getKey()) $this->editing = $this->makeBlankStrain();

        $this->showEditModal = true;
    }

    public function edit(Strain $strain)
    {
        $this->useCachedRows();

        if ($this->editing->isNot($strain)) $this->editing = $strain;

        $this->showEditModal = true;
    }

    public function save()
    {
        $this->validate();

        $this->editing->save();

        $this->showEditModal = false;
    }

    public function toggleShowFilters()
    {
        $this->useCachedRows();

        $this->showFilters = ! $this->showFilters;
    }

    public function getRowsQueryProperty()
    {
        $query = Strain::query()
            ->when($this->filters['strain_name'], fn($query, $strain_name) => $query->where('strain_name', $strain_name))
            ->when($this->filters['strain_menu_id'], fn($query, $strain_menu_id) => $query->where('strain_menu_id', $strain_menu_id))
            ->when($this->filters['strain_type'], fn($query, $strain_type) => $query->where('strain_type', $strain_type));
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
        return view('livewire.strain-list', [
            'strains' => $this->rows,
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
