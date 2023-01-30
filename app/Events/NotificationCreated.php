<?php

namespace App\Events;

use App\Models\Notification;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;

class NotificationCreated implements ShouldBroadcastNow
{
    use Dispatchable;

    public function __construct(public Notification $notification)
    {
    }

    public function broadcastOn(): Channel
    {
        return new Channel('notifications');
    }

    public function broadcastWith(): array
    {
        return $this->notification->load(['categories', 'categories.category'])->toArray();
    }
}
