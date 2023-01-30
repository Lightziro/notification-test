<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'login' => ['required', 'string', 'exists:users'],
            'password' => ['required', 'string'],
        ];
    }

    public function attributes(): array
    {
        return [
            'login' => 'Логин',
            'password' => 'Пароль'
        ];
    }

    public function messages(): array
    {
        return [
            'login.required' => 'Заполните поле Логин',
            'password.required' => 'Заполните поле Пароль',
            'login.exists' => 'Пользователь не найден',
        ];
    }
}
