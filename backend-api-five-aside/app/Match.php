<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    // only allow these fields to get updated via mass assignment
    protected $fillable = ["team_one_name", "team_one_score", "team_two_name", "team_two_score", "team_one_players", "team_two_players"];

    // converts the JSON stored in the matches table back into two arrays
    protected $casts = [
        "team_one_players" => 'array',
        "team_two_players" => 'array',
    ];
}
