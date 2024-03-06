import React from "react";
import logo from './images/logo.png';
import './navbar.css';
function Navbar () {
    return (
        <div className="navbar-body">
            <img className="logo" src={logo} alt="This will be the main logo"/>
        </div>
    )
}
export default Navbar;