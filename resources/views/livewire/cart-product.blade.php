<main class="grid grid-flow-col">
<div class="col-start-2 col-span-2 flex flex-wrap mx-4 mb-8 py-8 px-4">                         
	<div class="border rounded shadow overflow-hidden mb-4">
		<img src="https://picsum.photos/280/150?item={{ $ids }}" class="w-full block">
		<div class="flex justify-between p-4 items-center">
			<div class="flex justify-center">{{ $name }}<strong>{{ $price }}</strong></div>
			@unless ($alreadyAdded)
			<button
				class="border border-green hover:bg-green px-3 py-2 text-green hover:text"
				style="outline: none !important"
				wire:click="add"
			>
			+ Add
			</button>
			@else	
			<button
				class="px-3 py-2 rounded-full text-red font-bold text-sm"
				style="outline: none !important"
				wire:click="remove"
			>
			Remove
			</button> 
			@endunless
		</div>
	</div>
</div>

</main>
