<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\NotificationController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::get('/getUser', [AuthController::class, 'getUser'])->middleware('auth:sanctum');
Route::group(['prefix' => 'notifications', 'middleware' => ['auth:sanctum'], 'controller' => NotificationController::class], function () {
    Route::get('/', 'index');
    Route::post('/', 'create');
    Route::group(['prefix' => '{notification}'], function () {
        Route::get('/', 'getNotification');
        Route::delete('/', 'delete');
        Route::put('/', 'update');
        Route::put('/view', 'view');
    });
});
Route::group(['prefix' => 'categories', 'middleware' => ['auth:sanctum'], 'controller' => CategoryController::class], function () {
    Route::get('/', 'index');
    Route::post('/', 'create');
});
