<?php

namespace App\Http\Livewire\Auth;

use App\Models\User;
use Livewire\Component;
use Illuminate\Support\Facades\Hash;

class Register extends Component
{
    public $email = '';
    public $password = '';
    public $role_member = 'level_member';
    public $passwordConfirmation = '';

    protected $rules = [
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6|same:passwordConfirmation',
    ];

    public function updatedEmail()
    {
        $this->validate(['email' => 'unique:users']);
    }

    public function register()
    {
        $this->validate();

        $user = User::create([
            'email' => $this->email,
            'password' => Hash::make($this->password),
            'role_member' => $this->role_member
        ]);

        $userRole = 4;
        $user->roles()->attach($userRole);

        auth()->login($user);

        return redirect('/dashboard');
    }



    public function render()
    {
        return view('livewire.auth.register')
            ->layout('layouts.auth');
    }
}
