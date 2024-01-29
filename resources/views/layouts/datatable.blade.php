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
      @if(isset($slot))
        {{ $slot }}
      @else
        @yield('content')
      @endif


    @livewireScripts
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
    <script type="text/javascript" defer>
        $(document).ready(function() {
          var img_reg_l = '/img/btn_l_reg.png';
          var img_reg_r = '/img/btn_r_reg.png';
          var img_hover_l = '/img/btn_l_hover.png';
          var img_hover_r = '/img/btn_r_hover.png';
          $( '.img-l' ).hover(function(event) {
              /* Stuff to do when the mouse enters the element */
              $( '.img-l' ).attr("src", img_hover_l);
          },
          function(event) {
              /* Stuff to do when the mouse leaves the element */
              $( '.img-l' ).attr("src", img_reg_l);
          });
          $( '.img-r' ).hover(function(event) {
              /* Stuff to do when the mouse enters the element */
              $( '.img-r' ).attr("src", img_hover_r);
          },
          function(event) {
              /* Stuff to do when the mouse leaves the element */
              $( '.img-r' ).attr("src", img_reg_r);
          });
          $('#hamburgerbtn').click(function(){
            $('#hamburgerbtn').toggle();
            $('#mobileMenu').toggle();
            $('#hamburgerbtn2').toggle();
          });
          $('#hamburgerbtn2').click(function(){
            $('#hamburgerbtn2').toggle();
            $('#mobileMenu').toggle();
            $('#hamburgerbtn').toggle();
          });
        });
    </script>
</body>
</html>
