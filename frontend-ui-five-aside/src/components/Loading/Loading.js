import React, { Component } from "react";

class Loading extends Component {

    render() {
        const { children, loaded } = this.props;

        return loaded ? children : (
            <div className="loader"></div>
        );
    }
}

export default Loading;