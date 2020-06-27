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

// takes the players array which has now been assigned team numbers for each player and overwrites the previous array with unassigned teams
const makeTeams = (state, { players }) => {
    return {
        ...state,
        players: players,
    };
};

// Settings reducer

// takes the values the user has submitted upon saving settings and assigns them to their corresponding properties in global state, all done on the front end
const setSettings = (state, { settings }) => {
    return {
        ...state,
        team_one_name: settings.team_one_name,
        team_two_name: settings.team_two_name,
        team_one_colour: settings.team_one_colour,
        team_two_colour: settings.team_two_colour,
    };
};

// History reducers

// assigns the array of match objects saved in the db to the history property, loaded is changed to true making history component show on the screen
const saveHistory = (state, { history }) => {
    return {
        ...state,
        history: history,
        loaded: true
    };
};

// resets history to an empty array while preserving rest of the current state
const resetHistory = (state) => {
    return {
        ...state,
        history: []
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_PLAYERS": return setPlayers(state, action);
        case "ADD_PLAYER": return addPlayer(state, action);
        case "EDIT_PLAYER": return editPlayer(state, action);
        case "REMOVE_PLAYER": return removePlayer(state, action);
        case "RESET_PLAYERS": return initial;
        case "MAKE_TEAMS": return makeTeams(state, action);
        case "SET_TEAM_SETTINGS": return setSettings(state, action);
        case "SAVE_HISTORY": return saveHistory(state, action);
        case "RESET_HISTORY": return resetHistory(state);
        default: return state;
    }
};

export default reducer;