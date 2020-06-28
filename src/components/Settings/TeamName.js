import React from 'react';

const TeamName = ({ id, handleChange, value }) => {
    return (
        <input
            className="input team-name-input"
            id={id}
            onChange={handleChange}
            value={value}
            placeholder="Enter team name"
        />
    );
};

export default TeamName;