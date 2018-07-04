import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './dashboard.css';

export default class Dashboard extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-head">
                    <h2>Dashboard</h2>
                    <Link to ='/wizard' style={{textDecoration: 'none'}}><div className="new-house-button">Add New Property</div></Link>
                </div>
            </div>
        )
    }
}