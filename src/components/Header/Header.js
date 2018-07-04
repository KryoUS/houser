import React from "react";
import {Link} from 'react-router-dom';
import './header.css';
import logo from '../../logo.png'

function Header() {
    return (
        <div className="header">
            <Link to ="/"><img src={logo} className="app-logo" alt="logo"></img></Link>
            <Link to ="/"><h1>Houser</h1></Link>
        </div>
    )
}

export default Header;