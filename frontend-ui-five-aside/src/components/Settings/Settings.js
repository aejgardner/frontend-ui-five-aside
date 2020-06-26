import React, { Component } from 'react';
import ColourGrid from "./ColourGrid";
import FootballKit from "./FootballKit";
import TeamName from "./TeamName";

class Settings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editingSettings: false,
            team_one_colour: this.props.team_one_colour,
            team_two_colour: this.props.team_two_colour,
            team_one_name: this.props.team_one_name,
            team_two_name: this.props.team_two_name,
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.selectColour = this.selectColour.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.submitSettings = this.submitSettings.bind(this);
    }

    // sets the value in state to the value of the name input field
    handleChange(e, teamName) {
        let input = e.target.value;

        this.setState({
            [teamName]: input,
        });
    }

    handleEdit() {
        this.setState({
            editingSettings: true,
        });
    }

    // assigns chosen shirt colour to whichever team the user has picked a colour for
    selectColour(e, teamColour) {
        let chosenColour = e.target.dataset.colour;

        if (chosenColour === undefined) {
            return
        } else {
            this.setState({
                [teamColour]: chosenColour
            })
        }
    }

    submitSettings(e) {
        e.preventDefault()

        this.props.submitSettings({ ...this.state })

        this.setState({
            editingSettings: false
        })
    }

    render() {
        const { editingSettings, team_one_colour, team_two_colour, team_one_name, team_two_name } = this.state;
        return (
            <div className="settings-form">
                <form onSubmit={this.submitSettings}>
                    <div className="names-container">
                        <label
                            className="settings-label settings-label-names"
                            htmlFor="team_one_name">Team Name:
                        </label>
                        <label
                            className="settings-label settings-label-names"
                            htmlFor="team_two_name">Team Name:
                        </label>
                        <h2 className="team-heading">{team_one_name}</h2>
                        <h2 className="team-heading">{team_two_name}</h2>
                        {editingSettings ?
                            <>
                                <TeamName
                                    id="team_one_name"
                                    handleChange={e => this.handleChange(e, "team_one_name")}
                                    value={team_one_name}
                                />
                                <TeamName
                                    id="team_two_name"
                                    handleChange={e => this.handleChange(e, "team_two_name")}
                                    value={team_two_name}
                                />
                            </>
                            :
                            null
                        }
                    </div>
                    <div className="kits-container">
                        <label className="settings-label settings-label-kits">Kit colour:</label>
                        <label className="settings-label settings-label-kits">Kit colour:</label>
                        {editingSettings ?
                            <>
                                <ColourGrid selectColour={e => this.selectColour(e, "team_one_colour")} />
                                <ColourGrid selectColour={e => this.selectColour(e, "team_two_colour")} />
                            </>
                            :
                            null
                        }
                        <FootballKit kitColour={team_one_colour} />
                        <FootballKit kitColour={team_two_colour} />
                    </div>
                    {editingSettings ?
                        <button
                            className="btn btn-center"
                            style={{ display: editingSettings ? "block" : "none" }}>Save
                        </button>
                        :
                        null
                    }
                </form>
                <button
                    onClick={this.handleEdit}
                    className="btn btn-blue"
                    style={{ display: editingSettings ? "none" : "block" }}>Edit
                </button>
            </div >
        );
    }
}

export default Settings;


