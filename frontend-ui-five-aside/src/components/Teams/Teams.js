import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import TeamGroup from "../TeamGroup";

class Teams extends Component {
    constructor(props) {
        super(props);

        // scores are intialised to empty strings, team names are passed in from the global state, ready to be passed onto match history
        this.state = {
            team_one_score: "",
            team_two_score: "",
            team_one_name: this.props.team_one_name,
            team_two_name: this.props.team_two_name,
            saved: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // using the componentDidMount lifecycle method to call the onLoad property as soon as the page loads, which calls the assignTeams api action
    componentDidMount() {
        this.props.onLoad();
    }

    // whichever score input the user is typing into, the score is being set in the corresponding state property
    handleChange(e, teamScore) {
        let input = +e.target.value;

        this.setState({
            [teamScore]: input,
        });
    }

    // submits the final score, team names and the players for each team to the history table in the DB
    handleSubmit(e) {
        e.preventDefault();

        this.props.handleSubmit(this.state)

        // resets score form after user submits final score
        this.setState({
            team_one_score: "",
            team_two_score: "",
            team_one_name: this.props.team_one_name,
            team_two_name: this.props.team_two_name,
            saved: true
        })

        // hide the saved message after 2 seconds
        setTimeout(() => this.setState({ saved: false }), 2000);
    }

    render() {
        // destructuring local state
        const { team_one_score, team_two_score, saved } = this.state;

        // destructuring the props object
        const { players, team_one_name, team_two_name, team_one_colour, team_two_colour } = this.props;

        // creates the two teams based on the team assignment (either 1 or 2) which happened on the backend
        let team_one_players = players.filter(player => player.team === 1);
        let team_two_players = players.filter(player => player.team === 2);

        // finds out the average team rating based on each player's rating
        let averageRating = Math.round(players.reduce((acc, player) => {
            return acc + player.player_rating;
        }, 0) / players.length);

        return (
            <div className="background-image">
                <Header>Teams</Header>
                {saved ? <p className="alert-message">Match saved!</p> : null}
                <div className="teams-wrapper">
                    <TeamGroup
                        kitColour={team_one_colour}
                        team={team_one_players}
                        teamName={team_one_name}
                        averageRating={averageRating}
                    />
                    <form
                        className="score-form"
                        onSubmit={this.handleSubmit}
                    >
                        <h2 className="team-name">Final Score</h2>
                        <h3 className="score-team">{team_one_name}</h3>
                        <input
                            className="input score-input"
                            type="text"
                            placeholder="Enter score"
                            value={team_one_score}
                            onChange={e => { this.handleChange(e, "team_one_score") }}
                        />
                        <h3 className="score-team">{team_two_name}</h3>
                        <input
                            className="input score-input"
                            type="text"
                            placeholder="Enter score"
                            value={team_two_score}
                            onChange={e => { this.handleChange(e, "team_two_score") }}
                        />
                        <button className="btn">Save match to history</button>
                    </form>
                    <TeamGroup
                        kitColour={team_two_colour}
                        team={team_two_players}
                        teamName={team_two_name}
                        averageRating={averageRating}
                    />
                </div>
                <div className="footer-nav">
                    <Link to="/">
                        <button className="btn btn-blue btn-change-players" type="button">Change your players</button>
                    </Link>
                    <Link to="/match-history">
                        <button className="btn btn-nav" type="button">Previous matches</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Teams;