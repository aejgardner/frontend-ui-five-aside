import React from 'react';

const FootballKit = ({ kitColour }) => {
    return (
        <div style={{ backgroundColor: kitColour }} className="football-shirt">
            <div style={{ backgroundColor: kitColour }} className="left-sleeve" />
            <div style={{ backgroundColor: kitColour }} className="right-sleeve" />
        </div>

    );
};

export default FootballKit;