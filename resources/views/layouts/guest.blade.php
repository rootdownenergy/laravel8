<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
    <meta name="csrf_token" content="{{ csrf_token() }}" />
    @livewireStyles
    <style>
      .active{
          display: block;
      }
      .deactive{
          display: none;
      }
      .carousel-open:checked + .carousel-item {
          position: static;
          opacity: 100;
      }
      .carousel-item {
          -webkit-transition: opacity 0.6s ease-out;
          transition: opacity 0.6s ease-out;
      }
      #carousel-1:checked ~ .control-1,
      #carousel-2:checked ~ .control-2,
      #carousel-3:checked ~ .control-3 {
          display: block;
      }
      .carousel-indicators {
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          bottom: 2%;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 10;
      }
      #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
      #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
      #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
          color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
      } 
      .img-slider-1
      {
          background-image: url('/img/adds_03.png');
      }  
      .img-slider-2
      {
          background-image: url('/img/image18.png');  
      }
      .img-slider-3
      {
          background-image: url('/img/frameless_slider.png');  
      }
      .img-bg-root
      {
          background-image: url('/img/svg_cross.svg');
      }
    </style>
</head>
<body class="antialiased font-sans bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400">

    @if(isset($slot))
      {{ $slot }}
    @else
      @yield('content')
    @endif

    @livewireScripts
    <script src="{{ asset('js/app.js') }}"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4Y8nkJMW4GryuN4he6SKoeb2idBzg8gA&libraries=geometry"></script>
    <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
    <script src="{{ asset('js/loc_vfinal_logs3.js') }}"></script>
    <script src="{{ asset('js/map_root_v12.js') }}"></script>
</body>
</html>
