import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

import '../Container/Main.css';

export default class LastMeetingOverall extends Component {

    state = {
        tracks: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/track/`)
            .then(res => {
                const tracks = res.data;
                this.setState({ tracks });
                console.log(res.data);

            })
    }

    render() {

        const { Results } = this.props;

        return (
            <div className="mt-5">
                <h5>Title : {Results.Title}</h5>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Likes</th>
                            <th>Listen</th>
                            <th>Duration</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>{Results.Likes}</td>
                            <td>{Results.Listenings}</td>
                            <td>{Results.Duration}</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        )
    }
}
