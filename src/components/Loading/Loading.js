import React, { Component } from "react";

class Loading extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleMount()
        }
    }

    render() {
        const { children, loaded } = this.props;

        // If the loaded property in global state is set to true, the History component will be shown, otherwise there will just be a loading symbol while the API request is being made
        return loaded ? children : (
            <div className="loader"></div>
        );
    }
}

export default Loading;