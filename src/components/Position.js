import React, { Component } from 'react';
import { Card, CardBody, CardText, CardHeader, Row, Col, Collapse, Button } from 'reactstrap';
import ChartComponents from './ChartComponents';


const RankingEvol =
    [
        {
            serie: "Listenings and Likes to Duration ratio",
            data: [
                { name: '1', Likes: 38153, Listenings: 24131},
                { name: '5', Likes: 13131, Listenings: 14612},
                { name: '10', Likes: 21335, Listenings: 35683},
                { name: '15', Likes: 35811, Listenings: 14315},
                { name: '20', Likes: 10001, Listenings: 64866},
                { name: '25', Likes: 54681, Listenings: 48354 },
                { name: '30', Likes: 68461, Listenings: 36844 },
            ]
        },

    ];

export default class Position extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }
    render() {
        return (
            <div className="mt-5 mb-5">
                <h4 className="text-center text-white font-weight-bold"> Listenings and Likes to Duration ratio</h4>
                

                <div className="mt-4">
                    <Button color="primary d-block ml-auto mr-auto pl-5 pr-5 shadow " onClick={this.toggle} >More information</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <Row>
                                    {RankingEvol.map((data, index) => {
                                        return (
                                            <Col> <ChartComponents key={index} Ranking={data} /> </Col>
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