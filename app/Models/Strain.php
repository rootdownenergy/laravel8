<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\MenuStrain;

/**
 * @property int $id
 * @property string $strain_name
 * @property string $strain_description
 * @property string $thc
 * @property string $cbd
 * @property string $cbn
 * @property string $strain_tag_words
 * @property string $strain_image
 * @property string $updated_at
 * @property string $created_at
 */
class Strain extends Model
{

    const STATUSES = [
        'success' => 'Success',
        'failed' => 'Failed',
        'processing' => 'Processing',
    ];
    protected $table = 'strains';
    //protected $guarded = [];
    /**
     * @var array
     */
    protected $fillable = ['status', 'strain_name', 'strain_description', 'thc', 'cbd', 'cbn', 'strain_tag_words', 'strain_image', 'strain_type', 'updated_at', 'created_at'];
    public function menus(){
        return $this->belongsToMany(MenuStrain::class);
    }
}
