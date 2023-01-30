<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Models\NotificationView;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{

    public function index(): JsonResponse
    {
        return $this->successResponse(Category::all());
    }

    public function create(CategoryRequest $request): JsonResponse
    {
        $data = $request->validated();

        /** @var Category $category */
        $category = Category::create($data);

        return $this->successResponse($category);
    }
}
