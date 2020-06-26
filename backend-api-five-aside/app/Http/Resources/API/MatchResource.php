<?php

namespace App\Http\Resources\API;

use Illuminate\Http\Resources\Json\JsonResource;

class MatchResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "team_one_name" => $this->team_one_name,
            "team_one_score" => $this->team_one_score,
            "team_two_name" => $this->team_two_name,
            "team_two_score" => $this->team_two_score,
            "team_one_players" => $this->team_one_players,
            "team_two_players" => $this->team_two_players,
        ];
    }
}
