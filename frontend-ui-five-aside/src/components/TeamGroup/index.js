// react redux's connect function
import { connect } from "react-redux";

// import in the TeamGroup component
import TeamGroup from "./TeamGroup";

const mapStateToProps = state => {
    return {
        players: state.players,
        teamOneName: state.teamOneName,
        teamTwoName: state.teamTwoName,
        teamOneColour: state.teamOneColour,
        teamTwoColour: state.teamTwoColour,
    };
};

export default connect(mapStateToProps)(TeamGroup);