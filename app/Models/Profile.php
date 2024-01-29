<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;

/**
 * @property int $profile_id
 * @property string $company_name
 * @property string $email_address
 * @property string $address
 * @property string $unit_number
 * @property string $city
 * @property string $state
 * @property int $zip
 * @property string $contact_website
 * @property string $hours_of_operation_sunday
 * @property string $hours_of_operation_monday
 * @property string $hours_of_operation_tuesday
 * @property string $hours_of_operation_wednesday
 * @property string $hours_of_operation_thursday
 * @property string $hours_of_operation_friday
 * @property string $hours_of_operation_saturday
 * @property boolean $rating
 * @property boolean $medical
 * @property boolean $recreational
 * @property boolean $ada
 * @property boolean $delivery
 * @property boolean $delivery_only
 * @property boolean $cbd
 * @property boolean $edibles
 * @property boolean $concentrates
 * @property boolean $cc
 * @property string $company_description
 * @property string $phone_number
 * @property boolean $lab_tested
 * @property boolean $clones
 * @property boolean $seeds
 * @property boolean $paid_tier
 * @property float $lat
 * @property float $lng
 */
class Profile extends Model
{
    use Sortable;
    protected $table = 'profiles';
    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * @var array
     */
    //protected $fillable = ['menu_num_id','company_name', 'email_address', 'address', 'unit_number', 'city', 'state', 'zip', 'contact_website', 'hours_of_operation_sunday', 'hours_of_operation_monday', 'hours_of_operation_tuesday', 'hours_of_operation_wednesday', 'hours_of_operation_thursday', 'hours_of_operation_friday', 'hours_of_operation_saturday', 'rating', 'medical', 'recreational', 'ada', 'delivery', 'delivery_only', 'cbd', 'edibles', 'concentrates', 'cc', 'company_description', 'phone_number', 'lab_tested', 'clones', 'seeds', 'paid_tier', 'lat', 'lng'];

    public $sortable = ['id', 'rating'];

    public function profileMenu(){
        return $this->hasOne('Menu', 'menu_id', 'menu_num_id');
    }
}
