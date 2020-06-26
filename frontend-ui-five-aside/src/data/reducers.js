import initial from "./initial";

// sets the empty players array defined in initial.js to the players object from the database
const setPlayers = (state, { players }) => {
    return {
        ...state,
        players: players
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PLAYERS": return setPlayers(state, action);
        default: return state;
    }
};

export default reducer;