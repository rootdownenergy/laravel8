<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Menu;
use App\Http\Livewire\DataTable\WithSorting;
use App\Http\Livewire\DataTable\WithCachedRows;
use App\Http\Livewire\DataTable\WithBulkActions;
use App\Http\Livewire\DataTable\WithPerPagePagination;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class Menus extends Component
{
    use WithPerPagePagination, WithSorting, WithBulkActions, WithCachedRows;

    public $showDeleteModal = false;
    public $showEditModal = false;
    public $showFilters = false;
    public $filters = [
        'search' => '',
        'name' => '',
    ];
    public $user_role_id = [];
    public $curr_user;


    public Menu $editing;

    protected $queryString = ['sorts'];

    protected $listeners = ['refreshMenuList' => '$refresh'];

    public function rules() { return [
        'editing.name' => 'required|min:3',
        'editing.status' => 'required|in:'.collect(Menu::STATUSES)->keys()->implode(',')
    ]; }

    public function mount()
    {
        $x = Auth::user();
        $this->curr_user = $x->username;
        array_push($this->user_role_id, $x->role_member);
        array_push($this->user_role_id, $x->role_netmin);
        array_push($this->user_role_id, $x->role_cloudmin);
        array_push($this->user_role_id, $x->role_datamin);
        $this->editing = $this->makeBlankMenu();
    }
    public function updatedFilters() { $this->resetPage(); }

    public function resetFilters() { $this->reset('filters'); }

    public function deleteSelected()
    {
        $deleteCount = $this->selectedRowsQuery->count();

        $this->selectedRowsQuery->delete();

        $this->showDeleteModal = false;

        $this->notify('You\'ve deleted '.$deleteCount.' menus');
    }

    public function makeBlankMenu()
    {
        return Menu::make(['menu_id' => '', 'name' => '', 'status' => 'success']);
    }

    public function create()
    {
        $this->useCachedRows();

        if ($this->editing->getKey()) $this->editing = $this->makeBlankMenu();

        $this->showEditModal = true;
    }

    public function edit(Menu $menu)
    {
        $this->useCachedRows();

        if ($this->editing->isNot($menu)) $this->editing = $menu;

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
        $query = Menu::query()
            ->when($this->filters['name'], fn($query, $name) => $query->where('name', $name));
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
        return view('livewire.menus', [
            'menus' => $this->rows,
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
