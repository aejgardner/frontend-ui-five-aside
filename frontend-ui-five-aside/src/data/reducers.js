import initial from "./initial";

// sets the empty players array defined in initial.js to the players object from the database
const setPlayers = (state, { players }) => {
    return {
        ...state,
        players: players
    };
};

// adds the new player object passed in from the database into the players array
const addPlayer = (state, { player }) => {
    return {
        ...state,
        players: [...state.players, player]
    };
};

// returns a new copy of the players array, finds where the id it's been passed in the updated player object matches the existing id in the players array of objects and replaces the entire player object with the new one. If there is no match the object is returned as is.
const editPlayer = (state, { player }) => {

    let list = state.players;

    let playersUpdated = list.map(listItem => {
        if (listItem.id === player.id) {
            return player
        } else {
            return listItem
        }
    })

    // assigns the new array of objects to the players array, overwriting the old one.
    return {
        ...state,
        players: playersUpdated
    };
};

// returns a new array of objects without the player object with the corresponding id and overwrites the existing players array
const removePlayer = (state, { id }) => {
    return {
        ...state,
        players: state.players.filter(player => player.id !== id)
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PLAYERS": return setPlayers(state, action);
        case "ADD_PLAYER": return addPlayer(state, action);
        case "EDIT_PLAYER": return editPlayer(state, action);
        case "REMOVE_PLAYER": return removePlayer(state, action);
        case "RESET_PLAYERS": return initial;
        default: return state;
    }
};

export default reducer;