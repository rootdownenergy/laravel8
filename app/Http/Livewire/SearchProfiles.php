<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Dispensary;
use App\Http\Livewire\DataTable\WithSorting;
use App\Http\Livewire\DataTable\WithPerPagePagination;
use App\Http\Livewire\DataTable\WithCachedRows;
use App\Http\Livewire\DataTable\WithBulkActions;


class SearchProfiles extends Component
{
    use WithPerPagePagination, WithSorting, WithBulkActions, WithCachedRows;

    public $showFilters = false;
    public $filters = [
        'search' => '',
        'company_name' => '',
        'city' => '',
        'state' => '',
        'zip' => 0
    ];
    protected $listeners = [
        'refreshDispensaries' => '$refresh'
    ];
    public Dispensary $editing;

    protected $queryString = ['sorts'];

    public function rules() { return [
        'editing.company_name' => 'required|min:3',
        'editing.email_address' => 'required',
        'editing.status' => 'required|in:'.collect(Dispensary::STATUSES)->keys()->implode(','),
        'editing.city' => 'required',
        'editing.state' => 'required',
        'editing.zip' => 'required'
    ]; }
    
    public function mount() { $this->editing = $this->makeBlankDispensary(); }
    public function updatedFilters() { $this->resetPage(); }

    public function toggleShowFilters()
    {
        $this->useCachedRows();

        $this->showFilters = ! $this->showFilters;
    }

    public function resetFilters() { $this->reset('filters'); }

    public function makeBlankDispensary()
    {
        return Dispensary::make(['company_name' => '', 'email_address' => '', 'status' => 'success', 'city' => '', 'state' => '', 'zip' => '']);
    }

    public function getRowsQueryProperty()
    {
        $query = Dispensary::query()
            ->when($this->filters['company_name'], fn($query, $company_name) => $query->where('company_name', 'like', $company_name))
            ->when($this->filters['city'], fn($query, $city) => $query->where('city', 'like', $city))
            ->when($this->filters['state'], fn($query, $state) => $query->where('state', 'like', $state))
            ->when($this->filters['zip'], fn($query, $zip) => $query->where('zip', 'like', $zip))
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
        return view('livewire.search-profiles', [
            'dispensaries' => $this->rows,
        ])->layout('layouts.datatable');
    }
}
