import { connect } from "react-redux";

import { getPreviousMatches } from "../../data/actions/api";

import Loading from "./Loading";

const mapStateToProps = state => {
    return {
        loaded: state.loaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleMount: () => dispatch(getPreviousMatches())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);