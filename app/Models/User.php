<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Role;

class User extends Authenticatable
{
    use Notifiable, HasFactory;

    protected $guarded = [];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function avatarUrl()
    {
        return $this->avatar
            ? Storage::disk('avatars')->url($this->avatar)
            : 'https://www.gravatar.com/avatar/'.md5(strtolower(trim($this->email)));
    }

    public function roles(){
        return $this->belongsToMany(Role::class);
    }

    public function isCLoudmin()
    {
       return in_array(2, $this->roles()->pluck('role_id')->all());
    }
    public function isNetmin()
    {
    return in_array(1, $this->roles()->pluck('role_id')->all());
    }
    public function isDatamin()
    {
       return in_array(3, $this->roles()->pluck('role_id')->all());
    }

}
