<div class="border rounded shadow overflow-hidden mb-4">
    <img src="https://cdn.karmanomic.com/{{$strain->strain_image}}" class="w-60 h-60 block" alt="{{$strain->strain_image}}">
    <div class="flex p-4 items-center justify-center">{{ $strain->strain_name }}
        <button
            class="border border-green hover:bg-green px-3 py-2 text-green hover:text"
            style="outline: none !important"
            wire:click="add">
            + Add
        </button>
    </div>
</div>

