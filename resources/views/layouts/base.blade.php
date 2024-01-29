<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <meta name="csrf_token" content="{{ csrf_token() }}" />
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2&display=swap" rel="stylesheet">


    @livewireStyles
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css">
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@1.2.3/dist/trix.css">
    
</head>
<body class="antialiased font-sans bg-gray-200">
    {{ $slot }}

    @livewireScripts
    <script src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4Y8nkJMW4GryuN4he6SKoeb2idBzg8gA&libraries=geometry"></script>
    <script src="{{ asset('js/map_alt.js') }}"></script>
</body>
</html>
