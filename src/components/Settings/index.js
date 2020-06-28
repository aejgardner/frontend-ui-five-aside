// react redux's connect function
import { connect } from "react-redux";

// import in the Settings component
import Settings from "./Settings";

import { saveTeamSettings } from "../../data/actions/state"

const mapStateToProps = state => {
    return {
        team_one_name: state.team_one_name,
        team_two_name: state.team_two_name,
        team_one_colour: state.team_one_colour,
        team_two_colour: state.team_two_colour,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitSettings: (data) => dispatch(saveTeamSettings(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);