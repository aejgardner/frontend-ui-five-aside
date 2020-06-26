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