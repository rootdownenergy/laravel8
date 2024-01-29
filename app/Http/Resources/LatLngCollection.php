<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\Profile;
use Illuminate\Support\Facades\DB;

class LatLngCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //$x = Profile::all()->count();
        //$query = DB::table('profiles')
                   // ->select('id', 'lat', 'lng')
                    //->get();
        $q = Profile::select('id','lat','lng')->get();
        return [
            'data' => $q,
            'total' => Profile::count()
        ];
    }
}
