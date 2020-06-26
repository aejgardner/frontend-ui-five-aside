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

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PLAYERS": return setPlayers(state, action);
        case "ADD_PLAYER": return addPlayer(state, action);
        default: return state;
    }
};

export default reducer;