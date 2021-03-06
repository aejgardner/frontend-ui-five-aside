export const setPlayers = (players) => {
    return {
        type: "SET_PLAYERS",
        players: players,
    };
};

export const addPlayer = (player) => {
    return {
        type: "ADD_PLAYER",
        player: player,
    };
};

export const editPlayer = (player) => {
    return {
        type: "EDIT_PLAYER",
        player: player,
    };
};

export const removePlayer = (id) => {
    return {
        type: "REMOVE_PLAYER",
        id: id
    };
};

export const resetPlayers = () => {
    return {
        type: "RESET_PLAYERS",
    };
};

export const makeTeams = (players) => {
    return {
        type: "MAKE_TEAMS",
        players: players,
    };
};

export const saveTeamSettings = (data) => {
    return {
        type: "SET_TEAM_SETTINGS",
        settings: data,
    };
};

export const saveHistory = (history) => {
    return {
        type: "SAVE_HISTORY",
        history: history,
    };
};

export const addMatchToHistory = (match) => {
    return {
        type: "ADD_MATCH",
        match: match,
    };
};

export const resetHistory = () => {
    return {
        type: "RESET_HISTORY",
    };
};