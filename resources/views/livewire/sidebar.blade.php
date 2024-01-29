<section>
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
            <li class="m-5"><a href="{{ route('profiles') }}" class="bg-opacity-0 border-2 border-white-400 text-white px-3 py-2 rounded-md text-sm font-medium">Profiles</a></li>
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
</section>
