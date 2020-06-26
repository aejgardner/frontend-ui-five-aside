<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class PlayerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "player_name" => ["required", "string", "max:30"],
            "player_rating" => ["required", "integer", "between:1,10"],
        ];
    }
}
