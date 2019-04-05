import React, { Component } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="main">
                <Row>
                    <h4> <Badge color="secondary">Duthu & Levêque </Badge> </h4>
                </Row>
            </div>
        );  
    }   
}