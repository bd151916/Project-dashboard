import React, { Component } from 'react';
import LastMeetingBtwTeam from '../components/LastMeetingBtwTeam';
import LastMeetingOverall from '../components/LastMeetingOverall';
import Odds from '../components/Odds';
import Position from '../components/Position';
import './Main.css';


export default class Main extends Component {
    render() {
        return (
            <div className="mb-5">
                <div>
                    <h1 className="text-white font-weight-bold " >Bibliothèque</h1>
                </div>
                <Odds />
                <LastMeetingOverall />
                <Position/>
                {/* <LastMeetingBtwTeam /> */}
        </div>
        );
    }
}