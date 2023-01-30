<?php

namespace App\Models;

use Illuminate\Database\Eloquent\BroadcastsEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


/**
 * @property string $title
 * @property string $text
 * @property int $views
 */
class Notification extends Model
{
    use BroadcastsEvents;

    protected $fillable = [
        'title',
        'text',
        'views',
    ];

    public function categories(): hasMany
    {
        return $this->hasMany(NotificationCategory::class);
    }
}
