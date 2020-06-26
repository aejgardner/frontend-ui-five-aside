// react redux's connect function
import { connect } from "react-redux";

// import in the Player component
import Player from "./Player";

import { patchPlayer, deletePlayer } from "../data/actions/api";

const mapDispatchToProps = (dispatch, { player }) => {
    return {
        onUpdate: (player_name, player_rating) => dispatch(patchPlayer(player.id, player_name, player_rating)),
        onDelete: () => dispatch(deletePlayer(player.id)),
    };
};

export default connect(null, mapDispatchToProps)(Player);