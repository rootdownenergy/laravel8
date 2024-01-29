<div class="xs:container sm:hidden md:hidden lg:hidden relative z-0">
  <nav class="mt-5 space-y-1 flex-1 px-2 bg-opacity-0">
    <div class="flex flex-row justify-between">
      <div id="hamburgerbtn" class="hidden">
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
        <li class="m-5">
          <button class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ">
            <a id="id-top" class="geo-loc" href="#rd_mark">Find Store Near Me</a>
          </button>
        </li>
        <li class="m-5"><a href="{{ route('profiles') }}" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium">Profiles</a></li>
        <li class="m-5"><a href="/login" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
        </li>
        <li class="m-5"><a href="/register" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium">Register</a>
        </li>
        @auth
        <li class="m-5"><livewire:auth.logout /></li>
        @endauth

      </ul>
    </div>
  </nav>
</div>
<main class="grid grid-flow-col">
  <!-- Static sidebar for desktop -->
  <div class="md:col-span-1 md:flex md:flex-col focus:outline-none">

  </div>
<div class="col-start-2 col-span-2 flex flex-wrap mx-4 mb-8 py-8 px-4">
    @foreach ($strains as $strain)
      <div class="md:w-1/4 px-4 mb-8 space-x-6">
        <img class="shadow-md rounded-lg border-white border-2" src="https://cdn.karmanomic.com/{{$strain->strain_image}}" alt="{{$strain->strain_name}}">
        <div class="justify-center text-white font-medium text-lg">{!! str_replace('.webp', ' ', $strain->strain_name) !!}</div>
                <!-- <button type="button" class="modal-button bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full" @click="showModal = true">Info</button> -->
        </div>
    @endforeach
</div>
<div class="container w-3/4 mx-4 mb-8 bg-opacity-0 text-white">
    {{ $strains->links() }}
</div>
</main>
