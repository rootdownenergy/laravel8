<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <meta name="csrf_token" content="{{ csrf_token() }}" />
        @livewireStyles
    </head>
    <body class="antialiased font-sans bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400">
        <main class="grid place-items-center h-screen">
            {{ $slot }}
        </main>
        @livewireScripts
    </body>
</html>
