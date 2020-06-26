// react redux's connect function
import { connect } from "react-redux";

// import in the Player component
import Player from "./Player";

import { patchPlayer } from "../../data/actions/api";

const mapDispatchToProps = (dispatch, { player }) => {
    return {
        onUpdate: (player_name, player_rating) => dispatch(patchPlayer(player.id, player_name, player_rating)),
    };
};

export default connect(null, mapDispatchToProps)(Player);