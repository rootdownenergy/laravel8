<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $table = 'roles';

    protected $fillable = ['netmin', 'cloudmin', 'datamin', 'member'];

    public function users(){
        return $this->belongsToMany(UserRole::class);
    }
}
