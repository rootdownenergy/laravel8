<div class="grid grid-cols-6 m-4 content-center">
    <div class="col-start-3 col-span-2 w-full ">
        <label for="search" class="sr-only">Search for strains</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <input wire:model.debounce.300ms="search"
                id="search"
                class="block w-full pl-10 pr-3 py-2 border border-white rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search for strains..." type="search" autocomplete="off">
            @if (strlen($search) > 2)
                <ul class="absolute z-50 bg-white border border-gray-300 w-full rounded-md mt-2 divide-y divide-gray-200 mb-8">
                    @forelse ($i as $result)
                        <li class="flex">
                            <img class="ml-2 mr-2 rounded-lg w-24 h-14" src="https://d3b3tm7jjqus71.cloudfront.net/{{$result->strain_image}}" alt="{{$result->strain_name}}">
                            <div class="justify-center text-black font-medium text-lg"> {!! str_replace('.webp', ' ', $result->strain_name) !!}</div>
                            <!-- <button type="button" class="modal-button bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full" @click="showModal = true">Info</button> -->
                        </li>
                    @empty
                        <li class="px-4 py-4">No results found for "{{ $search }}"</li>
                    @endforelse
                </ul>
            @endif
        </div>
    </div>
</div>
