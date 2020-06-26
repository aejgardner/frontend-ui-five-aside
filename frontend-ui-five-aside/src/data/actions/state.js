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

export const resetPlayers = () => {
    return {
        type: "RESET_PLAYERS",
    };
};