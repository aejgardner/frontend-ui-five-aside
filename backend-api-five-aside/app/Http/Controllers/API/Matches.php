<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Match;

use App\Http\Resources\API\MatchResource;

use App\Http\Requests\API\MatchRequest;

class Matches extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all previous matches
        return Match::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MatchRequest $request)
    {

        // get post request data 
        $data = $request->all();

        // create match with data and store in DB
        $match = Match::create($data);

        return new MatchResource($match);
    }

    /**
     * Delete all matches in the database
     */
    public function clear()
    {
        // delete everything in the database
        Match::truncate();

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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
