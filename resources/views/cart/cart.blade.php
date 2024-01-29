@extends('layouts.guest')

@section('content')
<div class="container mx-auto px-32">
	<div class="absolute pin-4 pin-r">
		@livewire('cart-counter')
	</div>
	<div class="pt-16 flex justify-between flex-wrap">
		@foreach ($products as $product)
			@livewire('cart-product', ['product' => $product])
		@endforeach
	</div>
</div>

@endsection('content')