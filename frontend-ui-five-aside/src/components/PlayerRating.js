import React from 'react';

const PlayerRating = ({ fontColour, handleRange }) => {
    return (
        <div className="player-rating-group">
            <div className="player-rating-numbers" style={{ color: fontColour }}>
                <span className="player-rating-number">1</span>
                <span className="player-rating-number">2</span>
                <span className="player-rating-number">3</span>
                <span className="player-rating-number">4</span>
                <span className="player-rating-number">5</span>
                <span className="player-rating-number">6</span>
                <span className="player-rating-number">7</span>
                <span className="player-rating-number">8</span>
                <span className="player-rating-number">9</span>
                <span className="player-rating-number">10</span>
            </div>
            <input
                className="rating-range"
                type="range"
                min="1"
                max="10"
                step="1"
                onChange={handleRange}
            />
        </div>
    );
};

export default PlayerRating;