<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Players;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// assigns "players" prefix to requests
Route::group(["prefix" => "players"], function () {

    // requests for creating a player, getting all players and deleting all players
    Route::post("", [Players::class, "store"]);
    Route::get("", [Players::class, "index"]);
    Route::delete("", [Players::class, "clear"]);

    // {player} is a url parameter representing the id we want
    // requests for deleting a single player, updating a single player and getting players with assigned team numbers
    Route::delete("{player}", [Players::class, "destroy"]);
    Route::patch("{player}", [Players::class, "update"]);
    Route::get("teams", [Players::class, "assign"]);
});
