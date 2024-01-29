@if (auth()->check())
       @if (auth()->user()->isCloudmin() || auth()->user()->isDatamin() || auth()->user()->isNetmin())
            <div>
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>

            <div class="py-4 space-y-4">
                <!-- Top Bar -->
                <div class="flex justify-between">
                    <div class="w-2/4 flex space-x-4">
                        <x-input.text wire:model="filters.search" placeholder="Search Transactions..." />

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

                        <x-dropdown label="Bulk Actions">
                            <x-dropdown.item type="button" wire:click="exportSelected" class="flex items-center space-x-2">
                                <x-icon.download class="text-cool-gray-400"/> <span>Export</span>
                            </x-dropdown.item>

                            <x-dropdown.item type="button" wire:click="$toggle('showDeleteModal')" class="flex items-center space-x-2">
                                <x-icon.trash class="text-cool-gray-400"/> <span>Delete</span>
                            </x-dropdown.item>
                        </x-dropdown>

                        <livewire:import-transactions />

                        <x-button.primary wire:click="create"><x-icon.plus/> New</x-button.primary>
                    </div>
                </div>

                <!-- Advanced Search -->
                <div>
                    @if ($showFilters)
                    <div class="bg-cool-gray-200 p-4 rounded shadow-inner flex relative">
                        <div class="w-1/2 pr-2 space-y-4">
                            <x-input.group inline for="filter-status" label="Status">
                                <x-input.select wire:model="filters.status" id="filter-status">
                                    <option value="" disabled>Select Status...</option>

                                    @foreach (App\Models\Transaction::STATUSES as $value => $label)
                                    <option value="{{ $value }}">{{ $label }}</option>
                                    @endforeach
                                </x-input.select>
                            </x-input.group>

                            <x-input.group inline for="filter-amount-min" label="Minimum Amount">
                                <x-input.money wire:model.lazy="filters.amount-min" id="filter-amount-min" />
                            </x-input.group>

                            <x-input.group inline for="filter-amount-max" label="Maximum Amount">
                                <x-input.money wire:model.lazy="filters.amount-max" id="filter-amount-max" />
                            </x-input.group>
                        </div>

                        <div class="w-1/2 pl-2 space-y-4">
                            <x-input.group inline for="filter-date-min" label="Minimum Date">
                                <x-input.date wire:model="filters.date-min" id="filter-date-min" placeholder="MM/DD/YYYY" />
                            </x-input.group>

                            <x-input.group inline for="filter-date-max" label="Maximum Date">
                                <x-input.date wire:model="filters.date-max" id="filter-date-max" placeholder="MM/DD/YYYY" />
                            </x-input.group>

                            <x-button.link wire:click="resetFilters" class="absolute right-0 bottom-0 p-4">Reset Filters</x-button.link>
                        </div>
                    </div>
                    @endif
                </div>

                <!-- Transactions Table -->
                <div class="flex-col space-y-4">
                    <x-table>
                        <x-slot name="head">
                            <x-table.heading class="pr-0 w-8">
                                <x-input.checkbox wire:model="selectPage" />
                            </x-table.heading>
                            <x-table.heading sortable multi-column wire:click="sortBy('title')" :direction="$sorts['title'] ?? null" class="w-full">Title</x-table.heading>
                            <x-table.heading sortable multi-column wire:click="sortBy('amount')" :direction="$sorts['amount'] ?? null">Amount</x-table.heading>
                            <x-table.heading sortable multi-column wire:click="sortBy('status')" :direction="$sorts['status'] ?? null">Status</x-table.heading>
                            <x-table.heading sortable multi-column wire:click="sortBy('date')" :direction="$sorts['date'] ?? null">Date</x-table.heading>
                            <x-table.heading />
                        </x-slot>

                        <x-slot name="body">
                            @if ($selectPage)
                            <x-table.row class="bg-cool-gray-200" wire:key="row-message">
                                <x-table.cell colspan="6">
                                    @unless ($selectAll)
                                    <div>
                                        <span>You have selected <strong>{{ $transactions->count() }}</strong> transactions, do you want to select all <strong>{{ $transactions->total() }}</strong>?</span>
                                        <x-button.link wire:click="selectAll" class="ml-1 text-blue-600">Select All</x-button.link>
                                    </div>
                                    @else
                                    <span>You are currently selecting all <strong>{{ $transactions->total() }}</strong> transactions.</span>
                                    @endif
                                </x-table.cell>
                            </x-table.row>
                            @endif

                            @forelse ($transactions as $transaction)
                            <x-table.row wire:loading.class.delay="opacity-50" wire:key="row-{{ $transaction->id }}">
                                <x-table.cell class="pr-0">
                                    <x-input.checkbox wire:model="selected" value="{{ $transaction->id }}" />
                                </x-table.cell>

                                <x-table.cell>
                                    <span href="#" class="inline-flex space-x-2 truncate text-sm leading-5">
                                        <x-icon.cash class="text-cool-gray-400"/>

                                        <p class="text-cool-gray-600 truncate">
                                            {{ $transaction->title }}
                                        </p>
                                    </span>
                                </x-table.cell>

                                <x-table.cell>
                                    <span class="text-cool-gray-900 font-medium">${{ $transaction->amount }} </span> USD
                                </x-table.cell>

                                <x-table.cell>
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-{{ $transaction->status_color }}-100 text-{{ $transaction->status_color }}-800 capitalize">
                                        {{ $transaction->status }}
                                    </span>
                                </x-table.cell>

                                <x-table.cell>
                                    {{ $transaction->date_for_humans }}
                                </x-table.cell>

                                <x-table.cell>
                                    <x-button.link wire:click="edit({{ $transaction->id }})">Edit</x-button.link>
                                </x-table.cell>
                            </x-table.row>
                            @empty
                            <x-table.row>
                                <x-table.cell colspan="6">
                                    <div class="flex justify-center items-center space-x-2">
                                        <x-icon.inbox class="h-8 w-8 text-cool-gray-400" />
                                        <span class="font-medium py-8 text-cool-gray-400 text-xl">No transactions found...</span>
                                    </div>
                                </x-table.cell>
                            </x-table.row>
                            @endforelse
                        </x-slot>
                    </x-table>

                    <div>
                        {{ $transactions->links() }}
                    </div>
                </div>
            </div>

            <!-- Delete Transactions Modal -->
            <form wire:submit.prevent="deleteSelected">
                <x-modal.confirmation wire:model.defer="showDeleteModal">
                    <x-slot name="title">Delete Transaction</x-slot>

                    <x-slot name="content">
                        <div class="py-8 text-cool-gray-700">Are you sure you? This action is irreversible.</div>
                    </x-slot>

                    <x-slot name="footer">
                        <x-button.secondary wire:click="$set('showDeleteModal', false)">Cancel</x-button.secondary>

                        <x-button.primary type="submit">Delete</x-button.primary>
                    </x-slot>
                </x-modal.confirmation>
            </form>

            <!-- Save Transaction Modal -->
            <form wire:submit.prevent="save">
                <x-modal.dialog wire:model.defer="showEditModal">
                    <x-slot name="title">Edit Transaction</x-slot>

                    <x-slot name="content">
                        <x-input.group for="title" label="Title" :error="$errors->first('editing.title')">
                            <x-input.text wire:model="editing.title" id="title" placeholder="Title" />
                        </x-input.group>

                        <x-input.group for="amount" label="Amount" :error="$errors->first('editing.amount')">
                            <x-input.money wire:model="editing.amount" id="amount" />
                        </x-input.group>

                        <x-input.group for="status" label="Status" :error="$errors->first('editing.status')">
                            <x-input.select wire:model="editing.status" id="status">
                                @foreach (App\Models\Transaction::STATUSES as $value => $label)
                                    <option value="{{ $value }}">{{ $label }}</option>
                                @endforeach
                            </x-input.select>
                        </x-input.group>

                        <x-input.group for="date_for_editing" label="Date" :error="$errors->first('editing.date_for_editing')">
                            <x-input.date wire:model="editing.date_for_editing" id="date_for_editing" />
                        </x-input.group>
                    </x-slot>

                    <x-slot name="footer">
                        <x-button.secondary wire:click="$set('showEditModal', false)">Cancel</x-button.secondary>

                        <x-button.primary type="submit">Save</x-button.primary>
                    </x-slot>
                </x-modal.dialog>
            </form>
        </div>
       @else
            <!-- This example requires Tailwind CSS v2.0+ -->
            <nav class="bg-gray-800">
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <!--
                        Icon when menu is closed.

                        Heroicon name: outline/menu

                        Menu open: "hidden", Menu closed: "block"
                      -->
                      <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      <!--
                        Icon when menu is open.

                        Heroicon name: outline/x

                        Menu open: "block", Menu closed: "hidden"
                      -->
                      <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex-shrink-0 flex items-center">
                      <div class="text-white text-bold text-md px-3 py-2 font-medium"><span>Welcome: {{ $curr_user }} </span></div>
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                      <div class="flex space-x-4">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                      </div>
                    </div>
                  </div>
                  <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span class="sr-only">View notifications</span>
                      <!-- Heroicon name: outline/bell -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </button>
                    <a href="/profile" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Profile</a>
                    <a href="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Strains</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
       @endif
@endif


