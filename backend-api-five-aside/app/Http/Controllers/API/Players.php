<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Player;

use App\Http\Resources\API\PlayerResource;

use App\Http\Requests\API\PlayerRequest;

class Players extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all the players
        return Player::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PlayerRequest $request)
    {
        // get post request data for player_name and player rating
        $data = $request->only(["player_name", "player_rating"]);

        // create player with data and store in DB
        $player = Player::create($data);

        // return the resource
        return new PlayerResource($player);
    }

    // orders players by skill and assigns team 1 to even indexed players and team 2 to odd indexed players
    public function assign()
    {
        // get all the players and sort them by skill
        $players = Player::orderBy('player_rating')->get();

        // assign a 1 to the team key for all even indexed players and a 2 to all odd indexed players
        foreach ($players as $key => $item) {
            if ($key % 2 === 0) {
                $item->team = 1;
                $item->fill(["team"])->save();
            } else {
                $item->team = 2;
                $item->fill(["team"])->save();
            }
        };

        // return the players array of objects with the new assignments
        return Player::all();
    }

    /**
     * Delete all players in the database
     */
    public function clear()
    {
        // delete everything in the database
        Player::truncate();

        // use a 204 code as there is no content in the response
        return response(null, 204);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PlayerRequest $request, Player $player)
    {
        // get the request data
        $data = $request->only(["player_name", "player_rating"]);

        // update the player
        $player->fill($data)->save();

        // return the updated player in the resource format
        return new PlayerResource($player);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Player $player)
    {
        $player->delete();

        // use a 204 code as there is no content in the response
        return response(null, 204);
    }
}
