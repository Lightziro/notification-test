<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


/**
 * @property int $category_id
 * @property int $notification_id
 * @property-read Category $category
 * @property-read Notification $notification
 */
class NotificationCategory extends Model
{
    protected $table = 'notification_categories';

    protected $fillable = [
        'category_id',
        'notification_id',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function notification(): BelongsTo
    {
        return $this->belongsTo(Notification::class);
    }
}
