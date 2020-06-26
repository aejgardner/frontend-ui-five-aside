<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    // Only allow the player_name and player_rating fields to be updated via mass assignment
    protected $fillable = ["player_name", "player_rating"];
}
