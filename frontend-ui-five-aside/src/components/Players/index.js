// react redux's connect function
import { connect } from "react-redux";

// import in the Players component
import Players from "./Players";

import { getPlayers, postPlayer } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleLoad: () => dispatch(getPlayers()),
        handleSubmit: (player_name, player_rating) => dispatch(postPlayer(player_name, player_rating)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);