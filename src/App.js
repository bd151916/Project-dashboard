import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SideMenu from './Container/SideMenu'
import Header from './components/Header';
import Routes from './routes';
import { Row, Col } from 'reactstrap';
import './App.css';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (

      <div>


        <div>
          <Row>
            <Col lg="2">
              <SideMenu />
            </Col>

            <Col lg="10">
              <Header />
              <div className="bg-app">
                <Routes />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
