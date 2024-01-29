<div>
<header class="block carousel" id="header-main-root">
  <div class="carousel-inner relative overflow-hidden">
    <!--Slide 1-->
    <input class="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" checked="checked" />
    <div class="carousel-item absolute opacity-0" style="height:50vh;">
      <div class="block h-full w-full text-white text-5xl text-center bg-cover bg-center bg-no-repeat img-slider-1"></div>
    </div>
    <label for="carousel-3" class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto"><img class="img-l" src="/img/btn_l_reg.png" /></label>
    <label for="carousel-2" class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto"><img class="img-r" src="/img/btn_r_reg.png" /></label>
          
    <!--Slide 2-->
    <input class="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true" />
    <div class="carousel-item absolute opacity-0" style="height:50vh;">
      <div class="block h-full w-full text-white text-5xl text-center bg-cover bg-center bg-no-repeat img-slider-2"></div>
    </div>
    <label for="carousel-1" class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto"><img class="img-l" src="/img/btn_l_reg.png" /></label>
    <label for="carousel-3" class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto"><img class="img-r" src="/img/btn_r_reg.png" /></label> 
          
    <!--Slide 3-->
    <input class="carousel-open hidden" type="radio" id="carousel-3" name="carousel" aria-hidden="true" />
    <div class="carousel-item absolute opacity-0" style="height:50vh;">
      <div class="block h-full w-full text-white text-5xl text-center bg-cover bg-center bg-no-repeat img-slider-3"></div>
    </div>
    <label for="carousel-2" class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 left-0 my-auto"><img class="img-l" src="/img/btn_l_reg.png" /></label>
    <label for="carousel-1" class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full leading-tight text-center z-10 inset-y-0 right-0 my-auto"><img class="img-r" src="/img/btn_r_reg.png" /></label>
    <!-- Add additional indicators for each slide-->
    <ol class="carousel-indicators">
      <li class="inline-block mr-3">
        <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
      </li>
      <li class="inline-block mr-3">
        <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
      </li>
      <li class="inline-block mr-3">
        <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
      </li>
    </ol>
  </div>
</header>
<div>
  <livewire:search-dropdown />
</div>

<div class="grid grid-flow">
  <div class="container md:hidden relative z-0">
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
        <li class="m-5">
          <button id="top-1111" type="button" class="top-z text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ">
            <a class="top-z geo-loc" href="#rd_mark">Find Store Near Me</a>
          </button>
        </li>
        <li class="m-5">
          <a href="{{ route('profiles') }}" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium">Profiles</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
<!-- Static sidebar for desktop -->
<div class="hidden col-span-1 md:flex md:flex-col w-64 focus:outline-none">
  <ul class="flex flex-col w-64 p-4">
    <li class="flex-shrink-0 flex p-4">
      <button id="top-1111" type="button" class="top-z text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2 flex-shrink-0 w-full group block">
            <a class="top-z geo-loc" href="#rd_mark">Find Store Near Me</a>
      </button>
    </li>
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
      <a href="{{ route('profiles') }}" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium flex-shrink-0 w-full group block">
        Profiles
      </a>
    </li>
    <li class="flex-shrink-0 flex p-4">
      <a href="/login" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium flex-shrink-0 w-full group block">
        Login
      </a>
    </li>
    <li class="flex-shrink-0 flex p-4">
      <a href="/register" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium flex-shrink-0 w-full group block">
        Register
      </a>
    </li>
  </ul>
</div>
  <div class="col-start-2 col-span-2 flex flex-wrap mx-4 mb-8 py-8 px-4">
    @if ($strains->count())
      @foreach ($strains as $strain)
      <div class="md:w-1/4 px-4 mb-8 space-x-6">
        <img class="shadow-md rounded-lg w-60 h-60 border-white border-2" src="https://d3b3tm7jjqus71.cloudfront.net/{{$strain->strain_image}}" alt="{{$strain->strain_name}}" />
        <div class="md:w-1/4 px-4 mb-8 mt-2 space-x-6">
          <div class="bg-transparent">
            <x-button.primary wire:click="openModal({{$strain->id}})">
              <div class="justify-center text-white font-medium text-lg">{!! str_replace('.webp', ' ', $strain->strain_name) !!}</div>
            </x-button.primary>
            @if($opened)
              @include('livewire.strain-detail')
            @endif
          </div>
        </div>
      </div>
      @endforeach
    @endif
    <div class="flex flex-wrap mx-4 mb-8 bg-opacity-0 text-white">
      {{ $strains->links() }}
    </div>
  </div>
</div>

<!-- Map and Table -->
<div class="container mx-auto mt-8 content-center">
    <div class="mt-8 min-w-full min-h-full w-full h-full" id="home-tbl-contain">
    </div>
    <div class="mt-8" id="rd_mark">
        <div class="min-w-full min-h-full w-full h-full" id="rd-map" style="height:100%;width:100%;min-height:575px;">
        </div>
    </div>
</div>
<div class="rd-info container mx-auto px-4" id="container1" style="display:none;">
    <div id="container1-1">
    </div>
</div>
<div class="rd-info container mx-auto px-4" id="container2" style="display:none;">
  <div id="container2-2">
  </div>
</div>
<div class="rd-info container mx-auto px-4" id="container3" style="display:none;">
  <div id="container3-3">
  </div>
</div>
<div class="rd-info container mx-auto px-4" id="container4" style="display:none;">
  <div id="container4-4">
  </div>
</div>
<div class="rd-info container mx-auto px-4" id="container5" style="display:none;">
  <div id="container5-5">
  </div>
</div>
<div class="rd-info container mx-auto px-4" id="container6" style="display:none;">
  <div id="container6-6">
  </div>
</div>
<div class="rd-info container mx-auto px-4" id="container7" style="display:none;">
  <div id="container7-7">
  </div>
</div>
<div class="rd-info container mx-auto px-4" id="container8" style="display:none;">
  <div id="container8-8">
  </div>
</div>
<div class="rd-info container mx-auto px-4" id="container9" style="display:none;">
  <div id="container9-9">
  </div>
</div>
<div class="rd-info container mx-auto px-4" id="container10" style="display:none;">
  <div id="container10-10">
  </div>
</div>
</div>