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
                { isAuthenticated && <button className="links">Add Stock</button> }
                { isAuthenticated && <Link className="links" to="/Stocks">Stocks</Link> }
                <Link className="links" to="/Explore">Explore</Link>
                <Link className="links" to="/About">About</Link>
                <Link className="links" to="/Profile">Profile</Link>
                {isAuthenticated ? (
                    <Link className="links" to="/Login" onClick={handleLogout}>Log Out</Link>
                ) : (
                    <Link className="links" to="/Login">Login</Link>
                )}
            </span>
        </div>
    )
}
export default Navbar;