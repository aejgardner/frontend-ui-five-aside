import axios from "../axios";

import { setPlayers } from "./state";

// gets the list of players from the database, returns an array of objects to be used in the state action
export const getPlayers = () => dispatch => {
    axios.get("/players").then(({ data }) => {
        const players = data;
        dispatch(setPlayers(players));
    });
};