<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NotificationRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => ['required', 'string'],
            'text' => ['required', 'string'],
        ];
    }

    public function attributes(): array
    {
        return [
            'title' => 'Заголовок',
            'text' => 'Текст'
        ];
    }
}
