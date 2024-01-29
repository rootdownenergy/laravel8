<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuStrain extends Model
{
        /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menu_strain';

    /**
     * @var array
     */
    //protected $fillable = ['menu_id', 'strain_id', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function menu()
    {
        return $this->belongsTo('App\Models\Menu');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function strain()
    {
        return $this->belongsTo('App\Models\Strain');
    }
}
