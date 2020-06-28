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
                        <h2 className="alert-message">No matches played!</h2>
                        <Link to="/">
                            <button
                                className="btn btn-footer"
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
                                {history.map((match, i) => (
                                    <tr key={i} className="table-row">
                                        <td>{match.id}</td>
                                        <td>{match.team_one_name}</td>
                                        <td>
                                            {match.team_one_score} - {match.team_two_score}
                                        </td>
                                        <td>{match.team_two_name}</td>
                                        <td>{match.team_one_score > match.team_two_score ? match.team_one_name : match.team_two_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button
                            onClick={this.handleClearHistory}
                            className="btn btn-red clear-history-btn"
                        >Clear previous matches
                </button>
                        <Link to="/">
                            <button
                                className="btn btn-footer"
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