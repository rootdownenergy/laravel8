<div>
    <div>
        <a href="{{ url('/')}}" class="w-full">
            <img class="w-full h-full" src="{{ url('/img/full_cross_mini.svg')}}" />
        </a>
    </div>
    <form wire:submit.prevent="login" action="#" method="POST">
        <div>
            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                Email address
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input wire:model="email" id="email" type="email" required autofocus class="@error('email') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
            @error('email') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror
        </div>

        <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input wire:model.lazy="password" id="password" type="password" required class="@error('password') border-red-500 @enderror appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            </div>
            @error('password') <div class="mt-1 text-red-500 text-sm">{{ $message }}</div> @enderror
        </div>

        <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
                <button type="submit" class="w-full text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2 flex-shrink-0 w-full group block">
                    Log In
                </button>
            </span>
        </div>
    </form>
    <div class="mt-6">
        <p class="mt-2 text-center text-sm leading-5 text-cyan-400 max-w">
            <a href="/register" class="font-medium text-cyan-400 hover:text-cyan-600 focus:outline-none focus:underline transition ease-in-out duration-150">
                Haven't signed up yet - Register?
            </a>
        </p>
    </div>
</div>
