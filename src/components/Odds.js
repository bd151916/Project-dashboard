import React, { Component } from 'react';
import axios from 'axios';

import { Card, CardBody, CardText, CardHeader, Row, Col } from 'reactstrap';

import '../Container/Main.css';
import './Odds.css';

// const data =
//     [
        // {
        //     name: "1",
        //     color: "#1A2B4C",
        //     data: 1.20,
        // },
        // {
        //     name: "NUL",
        //     color: "#6C757D",
        //     data: 6.30,
        // },
        // {
        //     name: "2",
        //     color: "#009DDC",
        //     data: 10.50,
        // }

//     ]


export default class Odds extends Component {

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
        return (

            <div className="mt-5 mb-5">
                <h4 className="text-center text-white font-weight-bold"> Odds next meeting </h4>
                <Row>
                    {this.state.tracks.map(d => (
                        <Col>
                            <Card className=" mt-2 mb-2 text-white" style={{ backgroundColor: '#1A2B4C' }}>
                                <CardHeader className="text-center " >{d.Title}</CardHeader>
                                <CardBody>
                                    <CardText className="text-center ">{d.Listenings} Listenings </CardText>
                                </CardBody>
                                <CardBody>
                                    <CardText className="text-center ">{d.Likes} Likes </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}