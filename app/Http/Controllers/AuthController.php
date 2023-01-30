<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        $data = $request->validated();
        if(Auth::attempt($data)) {
            /** @var User $user */
            $user = Auth::user();
            $token = $user->createToken($user->getKey())->plainTextToken;
            return $this->successResponse(compact('token'));
        }
        return $this->failedResponse(['message' => 'Не удалось пройти авторизацию']);
    }

    public function getUser(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $request->user();

        return $this->successResponse($user);
    }
}
