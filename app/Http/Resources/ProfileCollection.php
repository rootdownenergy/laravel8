<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\Profile;

class ProfileCollection extends ResourceCollection
{
    //public $preserveKeys = true;
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        $q = $request->input('q');
        $x = $this->collection;
        return [
            'data' => $x,
            'total' => Profile::where('state', '=', $q)->count()
        ];
    }
}
