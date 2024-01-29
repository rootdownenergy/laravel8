<main class="grid grid-flow-col">
<div class="col-start-2 col-span-4 flex flex-wrap mx-4 mb-8 py-8 px-4">
    <div class="w-full py-4 space-y-4">
        <!-- Top Bar -->
        <div class="flex justify-between">
            <div class="w-2/4 flex space-x-4">
                <x-input.text class="block w-full pl-10 pr-3 py-2 border border-white rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out" wire:model="filters.search" placeholder="Search Dispensaries..." />

                <x-button.link wire:click="toggleShowFilters">@if ($showFilters) Hide @endif Advanced Search...</x-button.link>
            </div>

            <div class="space-x-2 flex items-center">
                <x-input.group borderless paddingless for="perPage" label="Per Page">
                    <x-input.select wire:model="perPage" id="perPage">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </x-input.select>
                </x-input.group>

                <livewire:import-dispensaries />
            </div>
        </div>

        <!-- Advanced Search -->
        <div>
            @if ($showFilters)
            <div class="bg-cool-gray-200 p-4 rounded shadow-inner flex relative">
                <div class="w-1/2 pl-2 space-y-4">
                    <x-input.group inline for="filter-city" label="City">
                        <x-input.text wire:model.lazy="filters.city" id="filter-city" />
                    </x-input.group>
                    <x-input.group inline for="filter-state" label="State">
                        <x-input.text wire:model.lazy="filters.state" id="filter-state" />
                    </x-input.group>
                    <x-input.group inline for="filter-zip" label="Zip">
                        <x-input.text wire:model.lazy="filters.zip" id="filter-zip" />
                    </x-input.group>
                    <x-button.primary wire:click="resetFilters" class="absolute right-0 bottom-0 p-4">Reset Filters</x-button.primary>
                </div>
            </div>
            @endif
        </div>

        <!-- Dispensaries Table -->
        <div class="flex-col space-y-4">
            <x-table>
                <x-slot name="head">
                    <x-table.heading sortable multi-column wire:click="sortBy('company_name')" :direction="$sorts['company_name'] ?? null" class="">Company Name</x-table.heading>
                    <x-table.heading sortable multi-column wire:click="sortBy('contact_website')" :direction="$sorts['contact_website'] ?? null">Website</x-table.heading>
                    <x-table.heading sortable multi-column wire:click="sortBy('city')" :direction="$sorts['city'] ?? null">City</x-table.heading>
                    <x-table.heading sortable multi-column wire:click="sortBy('state')" :direction="$sorts['state'] ?? null">State</x-table.heading>
                    <x-table.heading sortable multi-column wire:click="sortBy('zip')" :direction="$sorts['zip'] ?? null">Zip</x-table.heading>
                    <x-table.heading multi-column>View Profile</x-table.heading>
                </x-slot>

                <x-slot name="body">
                    @forelse ($dispensaries as $dispensary)
                    <x-table.row class="hover:bg-sky-700" wire:loading.class.delay="opacity-50" wire:key="row-{{ $dispensary->id }}">
                        <x-table.cell>
                            <span href="#" class="inline-flex space-x-2 truncate text-sm leading-5">
                                <p class="text-cool-gray-600 truncate">
                                    {{ $dispensary->company_name }}
                                </p>
                            </span>
                        </x-table.cell>
                        <x-table.cell>
                            <span class="text-cool-gray-900 font-medium"><a href="{{ $dispensary->contact_website }}"></a>{{ $dispensary->contact_website }} </span> 
                        </x-table.cell>
                        <x-table.cell>
                            <span class="text-cool-gray-900 font-medium">{{ $dispensary->city }} </span> 
                        </x-table.cell>
                        <x-table.cell>
                            <span class="text-cool-gray-900 font-medium">{{ $dispensary->state }} </span> 
                        </x-table.cell>
                        <x-table.cell>
                            <span class="text-cool-gray-900 font-medium">{{ $dispensary->zip }} </span> 
                        </x-table.cell>
                        <x-table.cell>
                            <x-button.link>
                                <a href="/dispensary/{{ $dispensary->menu_num_id }}" class="">
                                    View Profile
                                </a>
                            </x-button.link>
                        </x-table.cell>
                    </x-table.row>
                    @empty
                    <x-table.row>
                        <x-table.cell colspan="6">
                            <div class="flex justify-center items-center space-x-2">
                                <x-icon.inbox class="h-8 w-8 text-cool-gray-400" />
                                <span class="font-medium py-8 text-cool-gray-400 text-xl">No dispensaries found...</span>
                            </div>
                        </x-table.cell>
                    </x-table.row>
                    @endforelse
                </x-slot>
            </x-table>

            <div>
                {{ $dispensaries->links() }}
            </div>
        </div>
    </div>

</div>
<div class="hidden md:container md:hidden relative z-0">
  <nav class="mt-5 space-y-1 flex-1 px-2 bg-opacity-0">
    <div class="flex flex-row justify-between sm:hidden">
      <div id="hamburgerbtn" class="sm:hidden">
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div id="hamburgerbtn2" class="hidden">
        <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    <div class="flex flex-row justify-between hidden" id="mobileMenu">
      <ul class="">
        <li class="m-5"><a href="/" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium">Strains</a></li>
        <li class="m-5"><a href="{{ route('profiles') }}" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium">Profiles</a></li>
      </ul>
    </div>
  </nav>
</div>
<!-- Static sidebar for desktop -->
<div class="sm:col-span-1 md:flex md:flex-col w-3/4 focus:outline-none">
  <ul class="flex flex-col w-64 p-4">
    <li class="flex-shrink-0 flex p-4">
      <a href="/store" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium flex-shrink-0 w-full group block">
            Products
      </a>
    </li>
    <li class="flex-shrink-0 flex p-4">
      <a href="/token" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium flex-shrink-0 w-full group block">
            Karma Token
      </a>
    </li>
    <li class="flex-shrink-0 flex p-4">
      <a href="/" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium flex-shrink-0 w-full group block">
            Strains
      </a>
    </li>
  </ul>
</div>
</main>
