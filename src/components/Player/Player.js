import React, { Component } from "react";
import PlayerRating from "../../components/PlayerRating";

class Player extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player_name: this.props.player.player_name,
            player_rating: this.props.player.player_rating,
            editing: false,
        }

        // player name and rating is set to their pre-defined values that are on the player property. Editing is intially false so edit box isn't rendered at the start

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRange = this.handleRange.bind(this);
    }

    // determines whether the edit section for individual player is shown
    handleEdit() {
        this.setState({
            editing: true,
        });
    }

    // sets the value of player_rating in state to the value of the range chosen for player's rating
    handleRange(e) {
        let num = e.target.value;

        this.setState({
            player_rating: num,
        });
    }

    // sets the player_name state property to match the name input field
    handleChange(e) {
        let input = e.target.value;

        this.setState({
            player_name: input
        });
    }

    // allows the player to be deleted from the database
    handleDelete(e) {
        this.props.onDelete();
    }

    // takes the player information, which has either been updated or is still set to its initial value and submits it to the database
    handleSubmit(e) {
        e.preventDefault();

        let player_name = this.state.player_name;
        let player_rating = this.state.player_rating

        this.setState({
            editing: false
        });

        this.props.onUpdate(player_name, player_rating);
    }

    render() {
        // destructuring the state and props objects
        const { player } = this.props;
        const { editing, player_name } = this.state;

        let rating = player.player_rating;

        return (
            <>
                {/* if 'editing' is set to true, this form is rendered with options to update player's name and rating */}
                {editing ?
                    <form
                        className="update-player-form"
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            className="input"
                            id="player"
                            onChange={this.handleChange}
                            value={player_name}
                        />
                        <PlayerRating
                            handleRange={(e) => this.handleRange(e)}
                            fontColour="black"
                        />
                        <button className="btn update-player-btn">Update</button>
                    </form>
                    :
                    // the name renders as a p element if there if 'editing' in state is false
                    <p className="player">{player.player_name}</p>}
                {/* This section appears regardless of editing state to allow for editing and deletion*/}
                <div className="player-options">
                    <p className="player-rating">{rating}</p>
                    <button className="btn btn-blue" onClick={this.handleEdit}>Edit</button>
                    <button className="btn btn-red" onClick={this.handleDelete}>Delete</button>
                </div>
            </>
        )
    }
}

export default Player;