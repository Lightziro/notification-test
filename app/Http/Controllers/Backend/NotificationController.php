<?php

namespace App\Http\Controllers\Backend;

use App\Events\NotificationCreated;
use App\Http\Controllers\Controller;
use App\Http\Requests\NotificationRequest;
use App\Models\Notification;
use Illuminate\Http\JsonResponse;

class NotificationController extends Controller
{
    public function view(Notification $notification): JsonResponse
    {
        $notification->views++;
        $notification->save();

        return $this->successResponse();
    }

    public function index(): JsonResponse
    {
        return $this->successResponse(Notification::all());
    }

    public function create(NotificationRequest $request): JsonResponse
    {
        $data = $request->validated();

        /** @var Notification $notification */
        $notification = Notification::create($data);

        foreach ($request->get('categories') as $category) {
            $notification->categories()->create(['category_id' => $category]);
        }

        NotificationCreated::dispatch($notification);

        return $this->successResponse($notification);
    }

    public function delete(Notification $notification)
    {
        $notification->delete();
        $this->successResponse();
    }

    public function update(Notification $notification, NotificationRequest $request)
    {
        $data = $request->validated();

        $notification->fill($data);
        $notification->save();

        $this->successResponse();
    }

    public function getNotification(Notification $notification): JsonResponse
    {
        return $this->successResponse($notification);
    }
}
