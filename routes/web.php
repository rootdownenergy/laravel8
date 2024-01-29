<?php

use Illuminate\Support\Facades\Route;
use App\Http\Livewire\Auth\Login;
use App\Http\Livewire\Auth\Logout;
use App\Http\Livewire\Auth\Register;
use App\Http\Livewire\Dashboard;
use App\Http\Livewire\Dispensaries;
use App\Http\Livewire\CartProduct;
use App\Http\Livewire\Profile;
use App\Http\Livewire\StrainList;
use App\Http\Livewire\Menus;
use App\Http\Livewire\Strains;
use App\Http\Livewire\Dispensary;
use App\Http\Livewire\Token;
use App\Http\Livewire\SearchProfiles;
use App\Http\Livewire\MenuStrain;
use App\Models\Product;
use App\Models\Strain;
use App\Http\Controllers\MapsController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Livewire\PhotoUpload;



Route::get('/privacy_policy', function () {
    return view('policy');
});
/**
* App Routes
* */
Route::middleware('auth')->group(function () {
    Route::get('/dispensary/{id}', Dispensary::class)->name('dispensary');
    Route::get('/editing', MenuStrain::class)->name('editing');
    Route::get('/dashboard', Dashboard::class)->name('dashboard');
    Route::get('/dispensaries', Dispensaries::class)->name('dispensaries');
    Route::get('/profile', Profile::class)->name('profile');
    Route::get('/menus', Menus::class)->name('menus');
    Route::get('/strains', StrainList::class)->name('strains');
    Route::get('/store', function(){
                return view('cart.cart', [
                    'products' => Product::all(),
                ])->layout('layouts.guest');
    });
});

    /**
    * Authentication
    */
    Route::middleware('guest')->group(function () {

        Route::get('/', Strains::class)->name('home')->middleware('map');
        Route::get('/dispensary/{id}', Dispensary::class)->name('dispensary');
        Route::get('/profiles', SearchProfiles::class)->name('profiles');
        Route::get('/token', Token::class)->name('token');
        Route::get('/profiles_ls', [MapsController::class, 'getProfiles']);
        Route::get('/get_id', [MapsController::class, 'getId']);
        Route::get('/on_l', [MapsController::class, 'onL']);
        Route::post('/on_l_rt', [MapsController::class, 'onLRT']);
        Route::post('/term_s', [MapsController::class, 'termS']);
        Route::post('/on_top', [MapsController::class, 'top']);
        Route::get('/login', Login::class)->name('auth.login');
        Route::get('/register', Register::class)->name('auth.register');
        Route::get('/imgs', [MapsController::class, 'getUImg']);
    });

