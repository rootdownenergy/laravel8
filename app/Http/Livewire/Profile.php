<?php

namespace App\Http\Livewire;

use App\Models\User;
use Livewire\Component;
use Livewire\WithFileUploads;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class Profile extends Component
{
    use WithFileUploads;

    public User $user;
    public $upload;

    protected $rules = [
        'user.username' => 'max:24',
        'user.about' => 'max:255',
        'upload' => 'nullable|image|max:1000',
    ];
    public $user_role_id = [];
    public $curr_user;

    public function mount()
    {
        $x = Auth::user();
        $this->curr_user = $x->username;
        array_push($this->user_role_id, $x->role_member);
        array_push($this->user_role_id, $x->role_netmin);
        array_push($this->user_role_id, $x->role_cloudmin);
        array_push($this->user_role_id, $x->role_datamin);
        $this->user = auth()->user();
    }

    public function save()
    {
        $this->validate();

        $this->user->save();

        $this->upload && $this->user->update([
            'avatar' => $this->upload->store('/', 'avatars'),
        ]);

        $this->emitSelf('notify-saved');
    }

}
