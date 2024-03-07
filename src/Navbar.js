import React from "react";
import {Nav} from "react-bootstrap";
import logo from './images/logo.png';
import './navbar.css';
function Navbar () {
    return (
        <div className="navbar-body">
            <span>
                <img className="logo" src={logo} alt="This will be the main logo"/>
            </span>
            <div>
                <Nav.Link className="login-button" to="/Login">Login</Nav.Link>
            </div>
        </div>
    )
}
export default Navbar;