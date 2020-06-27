import React from 'react';
import FootballKit from "../Settings/FootballKit";

const TeamGroup = ({ teamName, averageRating, kitColour, team }) => {
    return (
        <div className="team-group">
            <h2 className="team-name">{teamName}</h2>
            <FootballKit kitColour={kitColour} />
            <p className="team-rating">Average rating: {averageRating}/10</p>
            <div className="team-list" >
                {team.map((player, i) => (
                    <span className="team-player" key={i}>{player.player_name}</span>
                ))}
            </div>
        </div>

    );
};

export default TeamGroup;