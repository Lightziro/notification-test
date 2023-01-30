<?php

namespace App\Models;

use Illuminate\Database\Eloquent\BroadcastsEvents;
use Illuminate\Database\Eloquent\Model;


/**
 * @property string $name
 */
class Category extends Model
{
    use BroadcastsEvents;

    protected $fillable = [
        'name',
    ];
}
