<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Strain;

class Menu extends Model
{
    use HasFactory;

    const STATUSES = [
        'success' => 'Success',
        'failed' => 'Failed',
        'processing' => 'Processing',
    ];
    protected $table = 'menu';
    protected $guarded = [];

    public function strains(){
        return $this->belongsToMany(Strain::class);
    }
}
