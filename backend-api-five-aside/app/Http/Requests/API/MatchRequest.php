<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class MatchRequest extends FormRequest
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
            "team_one_name" => ["required", "string", "max:50"],
            "team_one_score" => ["required", "integer"],
            "team_two_name" => ["required", "string", "max:50"],
            "team_two_score" => ["required", "integer"],
            "team_one_players" => ["required"],
            "team_two_players" => ["required"]
        ];
    }
}
