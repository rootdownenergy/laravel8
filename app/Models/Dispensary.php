<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dispensary extends Model
{
    use HasFactory;

    const STATUSES = [
        'success' => 'Success',
        'failed' => 'Failed',
        'processing' => 'Processing',
    ];
    protected $table = 'profiles';
    protected $guarded = [];

    public function getStatusColorAttribute()
    {
        return [
            'success' => 'green',
            'failed' => 'red',
        ][$this->status] ?? 'cool-gray';
    }
}
