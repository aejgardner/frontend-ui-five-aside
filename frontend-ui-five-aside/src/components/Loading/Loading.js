import React, { Component } from "react";

class Loading extends Component {

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleMount()
        }
    }

    render() {
        const { children, loaded } = this.props;

        return loaded ? children : (
            <div className="loader"></div>
        );
    }
}

export default Loading;