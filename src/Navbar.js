import React from "react";
import {Link } from 'react-router-dom';
import logo from './images/logo.png';
import './navbar.css';
function Navbar ({ isAuthenticated, handleLogout }) {
    return (
        <div className="navbar-body">
            <span>
                <Link className="home-logo" to="/"><img className="logo" src={logo} alt="This will be the main logo"/></Link>
            </span>
            <span className="nav-container">
                <button className="links"><Link className="about-button" to="/About">About</Link></button>
                {isAuthenticated ? (
                    <button className="links" onClick={handleLogout}>Log Out</button>
                ) : (
                    <button className="links"><Link className="login-button" to="/Login">Login</Link></button>
                )}
            </span>
        </div>
    )
}
export default Navbar;