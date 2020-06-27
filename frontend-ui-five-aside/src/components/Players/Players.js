import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Player from "../Player";
import PlayerRating from "../PlayerRating";
import Settings from "../Settings";

class Players extends Component {
    constructor(props) {
        super(props);

        // state is intialised with an empty string for player's name and a default player rating of 10
        this.state = {
            player_name: "",
            player_rating: "10",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRange = this.handleRange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    // using the lifecycle method that occurs when the page loads to call the handleLoad property, which gets the players from the database
    componentDidMount() {
        this.props.handleLoad();
    }

    // sets the value in state to the value of the name input field
    handleChange(e) {
        let input = e.target.value;

        this.setState({
            player_name: input,
        });
    }

    // sets the player_rating property in state to the range value chosen for player's rating
    handleRange(e) {
        let num = e.target.value;

        this.setState({
            player_rating: num,
        });
    }

    // submits the form with the data filled in by the user
    handleSubmit(e) {
        e.preventDefault();

        let player_name = this.state.player_name;
        let player_rating = this.state.player_rating;

        this.props.handleSubmit(player_name, player_rating);

        // resets the player_name state property so the user can add more players easily
        this.setState({
            player_name: "",
        });
    }

    // allows the user to delete the database to start fresh
    handleClear(e) {
        e.preventDefault();

        this.props.onClear();
    }

    render() {
        // destructuring the state and props objects
        let { players, team_one_name, team_two_name, team_one_colour, team_two_colour } = this.props;
        const { player_name, player_rating } = this.state;

        // only show add button when player has name and rating
        let hidden = true ? (player_name.length < 1 || player_rating === null) : false;

        // only show generate players button when user has entered at least 4 players
        let generateBtnDisabled = true ? players.length < 4 : false;

        return (
            <div className="background-image">
                <Header>Team Generator</Header>
                <h3 className="sub-heading">Enter at least 4 names to generate two random teams.</h3>
                {/* the form which allows users to submit new players, this is always rendered */}
                <form className="player-form" onSubmit={this.handleSubmit}>
                    <label className="label" htmlFor="player_name">Add a player:</label>
                    <input className="input player-input" id="player_name" onChange={this.handleChange} value={player_name} placeholder="Enter player's name"></input>
                    <p className="label">Player rating:</p>
                    {/* this component contains the player rating range */}
                    <PlayerRating handleRange={(e) => this.handleRange(e)} fontColour="white" />
                    <button className="btn" style={{ visibility: hidden ? "hidden" : "visible" }}>Add</button>
                    {/* this error message appears when the form data is invalid */}
                </form>
                {hidden ? <p className="alert-box">Please enter a player name and select a player rating.</p> : null}
                <main className="main">
                    { /* this checks there are players to show and renders either the players, or text which prompts the user to add players */}
                    {players.length ?
                        <div className="players-wrapper">
                            <div className="btn-group">
                                <button onClick={this.handleClear} className="btn btn-red">Clear players</button>
                                <Link to="/team-sheet">
                                    <button
                                        className="btn"
                                        style={{ visibility: generateBtnDisabled ? "hidden" : "visible" }}
                                        type="button">Generate teams
                                    </button>
                                </Link>
                            </div>
                            { /* this map iterates over each player and display a div with a player component for each one */}
                            {players.map(player => (
                                <div className="players" key={player.id}>
                                    <Player player={player} />
                                </div>
                            ))}
                        </div>
                        :
                        <p className="error">There are no players, add some above to get creating your teams!</p>
                    }
                    <div className="settings-and-prev-btn">
                        <Settings
                            teamOneName={team_one_name}
                            teamTwoName={team_two_name}
                            teamOneColour={team_one_colour}
                            teamTwoColour={team_two_colour}
                        />
                        <Link to="/match-history">
                            <button
                                className="btn btn-nav btn-footer"
                                type="button">Previous matches
                            </button>
                        </Link>
                    </div>
                </main>
            </div>
        )
    }
};

export default Players;