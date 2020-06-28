// react redux's connect function
import { connect } from "react-redux";

// import in the Teams component
import Teams from "./Teams"

import { assignTeams, postMatch } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        players: state.players,
        team_one_name: state.team_one_name,
        team_two_name: state.team_two_name,
        team_one_colour: state.team_one_colour,
        team_two_colour: state.team_two_colour,
    };
};

// this onLoad function means that when the user hard refreshes the /team-sheet page the data will still be passed through to render, without this a 404 error occurs on the hosted version.
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(assignTeams()),
        handleSubmit: (match, team_one_players, team_two_players) => dispatch(postMatch(match, team_one_players, team_two_players)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);