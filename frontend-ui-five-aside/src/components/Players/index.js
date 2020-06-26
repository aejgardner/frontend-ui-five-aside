// react redux's connect function
import { connect } from "react-redux";

// import in the Players component
import Players from "./Players";

import { getPlayers } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleLoad: () => dispatch(getPlayers()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);