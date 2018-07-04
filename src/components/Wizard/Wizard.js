import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './wizard.css';

class Wizard extends Component{
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="wizard">
                <div className="wizard-head">
                    <h3>Add New Listing</h3>
                    <Link to ='/' style={{textDecoration: 'none'}}><div className="cancel">Cancel</div></Link>
                </div>
                <div className="wizard-form">
                </div>
            </div>
        )
    }
}

export default Wizard;