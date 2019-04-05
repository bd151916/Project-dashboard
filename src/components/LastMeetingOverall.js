import React, { Component } from 'react';
import { Card, CardBody, CardText, CardHeader, Row, Col, Collapse, Button } from 'reactstrap';
import LastMeetingTabs from '../components/LastMeetingTabs';
import axios from 'axios';

import '../Container/Main.css';

/* const datas =
    [
        {

            Team: "PSG",
            color: "#6495A3",
            Victory: 2,
            Draw: 0,
            Defeat: 1,

        },
        {

            Team: "Marseille",
            color: "#6495A3",
            Victory: 2,
            Draw: 1,
            Defeat: 0,
        },
    ]*/

/* const ResultsOverall =
    [
        {
            Team: "PSG",
            Match: [
                {
                    Name: "PSG - Manchester United",
                    Score: "1 - 3",
                    Position: "Looser",
                },
                {
                    Name: "Caen - PSG",
                    Score: "1 - 2",
                    Position: "Winner",
                },
                {
                    Name: "PSG - Dijon",
                    Score: "3 - 0",
                    Position: "Winner",
                },
            ]
        },
        {
            Team: "Marseille",
            Match: [
                {
                    Name: "Olympique Marseille - Saint-Étienne",
                    Score: "2 - 0",
                    Position: "Winner",
                },
                {
                    Name: "Rennes - Olympique Marseille",
                    Score: "1 - 1",
                    Position: "Draw",
                },
                {
                    Name: "Olympique Marseille - Amiens SC",
                    Score: "2 - 0",
                    Position: "Winner",
                },
            ]
        },
    ] */

export default class LastMeetingOverall extends Component {

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/track/`)
            .then(res => {
                const tracks = res.data;
                this.setState({ tracks });
                console.log(res.data);
            })
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false , tracks: []};
    }

    render() {
        return (
            <div className="mt-5">
                <h4 className="text-center text-white font-weight-bold">Most recent tracks</h4>
                <Row>
                    {this.state.tracks.map(d => (
                        <Col>
                            <Card className="mt-2 mb-2">
                                <CardHeader className="text-center"> <h5> Title : {d.Title}</h5></CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <Card className="bg-success text-white">
                                                <CardBody className="text-center">
                                                    <CardText>Likes: {d.Likes}</CardText>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col>
                                            <Card className="bg-secondary text-white">
                                                <CardBody className="text-center">
                                                    <CardText>Listen: {d.Listenings}</CardText>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col>
                                            <Card className="bg-info text-white">
                                                <CardBody className="text-center">
                                                    <CardText>Duration: {d.Duration}</CardText>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>


                <div className="mt-4">
                    <Button color="primary d-block ml-auto mr-auto pl-5 pr-5 shadow " onClick={this.toggle} >List tracks</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <Row>
                                    {this.state.tracks.map((data, index) => {
                                        return (
                                            <Col> <LastMeetingTabs key={index} Results={data} /> </Col>
                                        )
                                    })}
                                </Row>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <hr />
            </div>
        )
    }
}