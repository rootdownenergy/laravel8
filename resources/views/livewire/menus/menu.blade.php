@if (auth()->check())
       @if (auth()->user()->isCloudmin() || auth()->user()->isDatamin() || auth()->user()->isNetmin()  )
          <main class="grid grid-flow-col">
              <div class="col-span-1 flex flex-col w-64 focus:outline-none">
                    <input type="number" wire:model.defer="current_menu_id">
                    <br>
                    <div>
                      <x-button.primary wire:click="menu">Get Current Store</x-button.primary>
                    </div>

                    <ul class="flex flex-col p-4">
                      <li><span>Current Dispensary Selected: </span>{{ $dispensary_name }}</li>
                      <br>
                      <li><span>Menu Id: </span>{{ $current_menu_id }}</li>
                      <br>
                      <li><a href="https://dev.crestonegardens.com/dispensary/{{$current_menu_id}}">Profile Link</a></li>
                    </ul>
                    <div class="flex flex-wrap mx-4 mb-8 bg-opacity-0 text-white">
                      {{ $strains->links() }}
                    </div>
              </div>
              <div class="col-start-2 col-span-2 flex flex-wrap mx-4 mb-8 py-8 px-4">
                  @foreach ($strains as $strain)
                    <div class="border rounded shadow overflow-hidden mb-4">
                        <img src="https://d3b3tm7jjqus71.cloudfront.net/{{$strain->strain_image}}" class="w-60 h-60 block" alt="{{$strain->strain_image}}">
                        <div class="flex p-4 items-center justify-center">
                            <div class="w-1/3 bg-white rounded-lg shadow">
                              <ul class="divide-y-2 divide-gray-100">
                                  <li class="p-3">{{ $strain->id }}</li>
                                  <li class="p-3">{!! str_replace('.webp', ' ', $strain->strain_name) !!}</li>
                              </ul>
                          </div>
                          <button
                                type="button"
                                class="px-6 py-2 text-white bg-red-600 rounded-full border border-green hover:bg-green px-3 py-2 text-green hover:text"
                                wire:click="add({{ $strain->id }})">
                                + Add
                          </button>
                        </div>
                    </div>
                  @endforeach
              </div>
            </main>
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


