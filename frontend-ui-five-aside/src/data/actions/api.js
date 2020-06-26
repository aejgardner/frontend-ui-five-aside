import axios from "../axios";

import { setPlayers, addPlayer, resetPlayers } from "./state";

// gets the list of players from the database, returns an array of objects to be used in the state action
export const getPlayers = () => dispatch => {
    axios.get("/players").then(({ data }) => {
        const players = data;
        dispatch(setPlayers(players));
    });
};

// creates a player with the name and rating the user entered, returns the new player object to be used in the state action
export const postPlayer = (player_name, player_rating) => dispatch => {
    axios.post("/players", {
        player_name: player_name,
        player_rating: player_rating
    }).then(({ data }) => {
        const player = data.data;
        dispatch(addPlayer(player));
    });
};


// resets the database, returns nothing, calls the resetPlayers state action
export const deletePlayers = () => dispatch => {
    axios.delete("/players").then(() => {
        dispatch(resetPlayers());
    });
};