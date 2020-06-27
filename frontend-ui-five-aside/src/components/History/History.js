import React, { Component } from "react";
import Header from '../../components/Header';
import { Link } from "react-router-dom";

class History extends Component {
    constructor(props) {
        super(props)

        this.handleClearHistory = this.handleClearHistory.bind(this);
    }

    handleClearHistory(e) {
        e.preventDefault()

        this.props.clearHistory()
    }

    render() {
        const { history } = this.props

        return (
            <div className="background-image">
                <Header>Previous Matches</Header>
                {/* if there is nothing in the matches table in the db, error message will show, otherwise the table will show */}
                {!history.length ?
                    <>
                        <h2 className="no-games-message">No games played!</h2>
                        <Link to="/">
                            <button
                                className="btn nav-btn btn-footer"
                                type="button">Home
                    </button>
                        </Link>
                    </>
                    :
                    <>
                        <table className="history-table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th>Game</th>
                                    <th>Team One</th>
                                    <th>Score</th>
                                    <th>Team Two</th>
                                    <th>Winner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((game, i) => (
                                    <tr key={i} className="table-row">
                                        <td>{game.id}</td>
                                        <td>{game.team_one_name}</td>
                                        <td>
                                            {game.team_one_score} - {game.team_two_score}
                                        </td>
                                        <td>{game.team_two_name}</td>
                                        <td>{game.team_one_score > game.team_two_score ? game.team_one_name : game.team_two_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button
                            onClick={this.handleClearHistory}
                            className="btn btn-red clear-history-btn"
                            style={{ display: visible ? "block" : "none" }}
                        >Clear previous matches
                </button>
                        <Link to="/">
                            <button
                                className="btn btn-nav btn-footer"
                                type="button">Home
                    </button>
                        </Link>
                    </>
                }
            </div>
        )
    }
}

export default History;