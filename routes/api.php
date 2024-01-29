<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ProfileCollection;
use App\Models\Profile;
use App\Http\Resources\StrainCollection;
use App\Models\Strain;
use App\Http\Resources\LatLngCollection;
use App\Http\Resources\StrainResource;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/profilels', function (Request $request) {
    $q = $request->input('q');
    $i = $request->input('per_page');
    //$x = $request->input('page');
    return new ProfileCollection(Profile::sortable(['$q' => 'desc'])
        ->where('state', '=', $q)
        ->orWhere('city', '=', $q)
        ->orWhere('company_name', '=', $q)
        ->orWhere('zip', '=', $q)
        ->paginate($i));
});
Route::get('latlng', function(){
    return new LatLngCollection(Profile::all());
});
// Route::get('/strainls', function () {
//     //$q = $request->input('q');
//     //$i = $request->input('per_page');
//     //$x = $request->input('page');
//     return new StrainCollection(Strain::all());
// });
Route::get('/strainls', function () {
    //$q = $request->input('q');
    //$i = $request->input('per_page');
    //$x = $request->input('page');
    return new StrainResource(Strain::all());
});