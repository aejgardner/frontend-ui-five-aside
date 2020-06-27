// react redux's connect function
import { connect } from "react-redux";

// import in the History component
import History from "./History";

import { deleteHistory } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        history: state.history
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearHistory: () => dispatch(deleteHistory()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);