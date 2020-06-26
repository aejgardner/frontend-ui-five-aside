import React from 'react';

const ColourGrid = ({ selectColour }) => {
    return (
        <>
            <div class="colour-grid" onClick={selectColour} >
                <div className="colour" data-colour="navy" />
                <div className="colour" data-colour="red" />
                <div className="colour" data-colour="darkred" />
                <div className="colour" data-colour="green" />
                <div className="colour" data-colour="orange" />
                <div className="colour" data-colour="purple" />
                <div className="colour" data-colour="pink" />
                <div className="colour" data-colour="turquoise" />
                <div className="colour" data-colour="yellow" />
                <div className="colour" data-colour="darkolivegreen" />
                <div className="colour" data-colour="aquamarine" />
                <div className="colour" data-colour="indianred" />
            </div>
        </>
    );
};

export default ColourGrid;
