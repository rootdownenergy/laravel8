<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\Paginator;
use App\Models\Profile;
use MarkSitko\LaravelUnsplash\Unsplash;

class MapsController extends Controller
{
    public function getProfiles()
    {
        $profiles = Profile::paginate(10);
        return View::make('profiles')->with('profiles', $profiles);
    }
    public function getId()
    {
        $profiles = Profile::all();

        foreach ($profiles as $profile) 
        {
            echo " ".htmlspecialchars($profile->id);
        }
    }
    public function onL()
    {
        $profiles = Profile::orderBy('id')->get();

        foreach ($profiles as $profile) 
        {
            echo " ".htmlspecialchars($profile->lat);
            echo " ".htmlspecialchars($profile->lng);
        }
    }
    public function top(Request $request)
    {
        // assign 10 closest lat values and store in array;
        $usr_lat1 = $request->input('t1');
        $usr_lat2 = $request->input('t2');
        $usr_lat3 = $request->input('t3');
        $usr_lat4 = $request->input('t4');
        $usr_lat5 = $request->input('t5');
        $usr_lat6 = $request->input('t6');
        $usr_lat7 = $request->input('t7');
        $usr_lat8 = $request->input('t8');
        $usr_lat9 = $request->input('t9');
        $usr_lat10 = $request->input('t10');

        $count = 0;
    
        $profiles = Profile::whereIn('lat', [$usr_lat1, $usr_lat2, $usr_lat3, $usr_lat4, $usr_lat5, $usr_lat6, $usr_lat7, $usr_lat8, $usr_lat9, $usr_lat10])->get();
        echo '<table id="home-tbl" class="w-full whitespace-nowrap bg-opacity-0 overflow-hidden border border-white border-2">';
        echo '<thead class="">';
        echo '<tr class="text-white text-left">';
        echo '<th class="font-semibold text-sm uppercase px-6 py-4">Logo';
        echo '</th>';
        echo '<th class="font-semibold text-sm uppercase px-6 py-4">Company Name';
        echo '</th>';
        echo '<th class="font-semibold text-sm uppercase px-6 py-4">Company Info';
        echo '</th>';
        echo '<th class="font-semibold text-sm uppercase px-6 py-4">Contact';
        echo '</th>';
        echo '<th class="font-semibold text-sm uppercase px-6 py-4">Services';
        echo '</th>';
        echo '<th class="font-semibold text-sm uppercase px-6 py-4">View on Map';
        echo '</th>';
        echo '</tr>';
        echo '</thead>';
        echo '<tbody class="level1 divide-y divide-gray-200">';
        foreach ($profiles as $sresult)
        {
            echo '<tr id="get-rows" class="get_r border border-white">';
            echo '<td class="dispensary-logo px-6 py-4"  >'.'<img id="d-logo" src="/img/logo_blk3_03.png" width="50px" height="50px">';
            echo '</td>';
            //td-2
            echo '<td class="dispensary-name px-6 py-4" id="c-name">'.htmlspecialchars($sresult->company_name);
            echo '</td>';
            //td-3
            echo '<td class="company-info px-6 py-4">'.htmlspecialchars($sresult->address).'<br>'.htmlspecialchars($sresult->city)." ".htmlspecialchars($sresult->state)." ".htmlspecialchars($sresult->zip);
            echo '</td>';
            //td-4
            echo '<td class="contact px-6 py-4">'.htmlspecialchars($sresult->phone_number);
            echo '</td>';
            //td-5
            echo '<td class="services px-6 py-4">'.htmlspecialchars($sresult->medical).htmlspecialchars($sresult->recreational);
            echo '</td>';
            //td-6
            echo '<td id="add-services" class="additional-services" hidden>'.htmlspecialchars($sresult->ada).htmlspecialchars($sresult->delivery).htmlspecialchars($sresult->delivery_only).htmlspecialchars($sresult->cbd).htmlspecialchars($sresult->edibles).htmlspecialchars($sresult->concentrates).htmlspecialchars($sresult->cc).htmlspecialchars($sresult->clones).htmlspecialchars($sresult->seeds);
            echo '</td>';
            //td-7
            echo '<td id="eLat" class="lat" hidden>'.' '.htmlspecialchars($sresult->lat);
            echo '</td>';
            //td-8
            echo '<td id="eLng" class="lng" hidden>'.' '.htmlspecialchars($sresult->lng);
            echo '</td>';
            //td-10
            echo '<td>';
            if ($count == 0) {
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-0" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';
            } elseif($count == 1){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-1" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } elseif($count == 2){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-2" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } elseif($count == 3){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-3" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } elseif($count == 4){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-4" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } elseif($count == 5){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-5" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } elseif($count == 6){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-6" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } elseif($count == 7){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-7" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } elseif($count == 8){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-8" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } elseif($count == 9){
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-9" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';

            } else {
                echo '<td class="map-location px-6 py-4">'.'<div>'.'<a id="mapper-10" class="text-white px-3 py-2 rounded-md text-sm font-medium transition duration-500 ease-in-out bg-opacity-0 border-2 border-white-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 mr-2" href="#rd-map">Map'.'</a>'.'</div>';
                $count = 0;
            }
            $count++;
            echo '</td>';
            echo '</tr>';
        }
        echo '</tbody>';
        echo '</table>';
    }
    public function onLRT(Request $request)
    {
        $usr_lat = $request->input('usr_lat');

        $usr_lng = $request->input('usr_lng');
        $usr_loc = $request->input('usr_loc');

        $profiles = Profile::where('lat', $usr_lat)
                            ->where('lng', $usr_lng);

        echo '<table id="home-tbl" class="container mx-auto table-auto border border-white p-5">';
        echo '<thead>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '</thead>';
        echo '<tbody class="leve1">';
        foreach ($profiles as $sresult)
        {
            echo '<tr id="get_rows" class="get_r border border-white p-5">';
            //td-2
            echo '<td class="dispensary-name" id="c-name">'.htmlspecialchars($sresult->company_name);
            echo '</td>';
            //td-3
            echo '<td class="company-info d-sm-block">'.htmlspecialchars($sresult->address).'<br>'.htmlspecialchars($sresult->city)." ".htmlspecialchars($sresult->state)." ".htmlspecialchars($sresult->zip);
            echo '</td>';
            //td-4
            echo '<td class="contact d-sm-block">'.htmlspecialchars($sresult->phone_number);
            echo '</td>';
            //td-5
            echo '<td class="services">'.htmlspecialchars($sresult->medical).htmlspecialchars($sresult->recreational);
            echo '</td>';
            //td-6
            echo '<td id="add-services" class="additional-services" hidden>'.htmlspecialchars($sresult->ada).htmlspecialchars($sresult->delivery).htmlspecialchars($sresult->delivery_only).htmlspecialchars($sresult->cbd).htmlspecialchars($sresult->edibles).htmlspecialchars($sresult->concentrates).htmlspecialchars($sresult->cc).htmlspecialchars($sresult->clones).htmlspecialchars($sresult->seeds);
            echo '</td>';
            //td-7
            echo '<td id="eLat" class="lat" hidden>'.' '.htmlspecialchars($sresult->lat);
            echo '</td>';
            //td-8
            echo '<td id="eLng" class="lng" hidden>'.' '.htmlspecialchars($sresult->lng);
            echo '</td>';
            //td-10
            echo '<td class="map-location">'.'<div>'.'<a id="'.$sresult->id.'" href="#rd-map">View on Map'.'</a>'.'</div>';
            echo '</td>';
            echo '</tr>';
        }
        echo '</tbody>';
        echo '</table>';
    }
    public function termS(Request $request)
    {
        $term = "denver";
        $profiles = Profile::paginate(10);
        echo '<table id="home-tbl" class="container mx-auto table-auto border border-white p-5">';
        echo '<thead>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '<th class="">';
        echo '</th>';
        echo '</thead>';
        echo '<tbody class="leve1">';
        foreach ($profiles as $sresult)
        {
            echo '<tr id="get_rows" class="get_r border border-white p-5">';
            //td-1
            echo '<td class="" >'.'<img id="d-logo" src="/img/logo_blk3_03.png" width="50px" height="50px">';
            echo '</td>';
            //td-2
            echo '<td class="dispensary-name" id="c-name">'.htmlspecialchars($sresult->company_name);
            echo '</td>';
            //td-3
            echo '<td class="company-info d-none d-sm-block">'.htmlspecialchars($sresult->address).'<br>'.htmlspecialchars($sresult->city)." ".htmlspecialchars($sresult->state)." ".htmlspecialchars($sresult->zip);
            echo '</td>';
            //td-4
            echo '<td class="contact d-none d-sm-block">'.htmlspecialchars($sresult->phone_number);
            echo '</td>';
            //td-5
            echo '<td class="services">'.htmlspecialchars($sresult->medical).htmlspecialchars($sresult->recreational);
            echo '</td>';
            //td-6
            echo '<td id="add-services" class="additional-services" hidden>'.htmlspecialchars($sresult->ada).htmlspecialchars($sresult->delivery).htmlspecialchars($sresult->delivery_only).htmlspecialchars($sresult->cbd).htmlspecialchars($sresult->edibles).htmlspecialchars($sresult->concentrates).htmlspecialchars($sresult->cc).htmlspecialchars($sresult->clones).htmlspecialchars($sresult->seeds);
            echo '</td>';
            //td-7
            echo '<td id="eLat" class="lat" hidden>'.' '.htmlspecialchars($sresult->lat);
            echo '</td>';
            //td-8
            echo '<td id="eLng" class="lng" hidden>'.' '.htmlspecialchars($sresult->lng);
            echo '</td>';
            //td-9
            echo '<td class="view-profile"><a id="profile" href="" style="font-size:.88em;" target="_blank" hidden>Profile</a>';
            echo '</td>';
            //td-10
            echo '<td class="map-location">'.'<div>'.'<a id="'.$sresult->id.'" class="view" href="#rd-map" type="button">View on Map'.'</a>'.'</div>';
            echo '</td>';
            echo '</tr>';
        }
        echo '</tbody>';
        echo '</table>';
    }
    public function getMember($id)
    {
        $profile = Profile::find($id);
        return View::make('membersprofile')->with('profile', $profile);
    }
}
