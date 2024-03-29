import React from "react";
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import './navbar.css';
function NavBar ({ isAuthenticated, handleLogout }) {
    return (
        <div className="navbar-body">
            <Navbar collapseOnSelect expand="lg" variant="primary" className='navigation-bar'>
            <Navbar.Brand className='home-logo' href='/'><img className="logo" src={logo} alt="This will be the main logo"/></Navbar.Brand> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto nav-container">
                    { isAuthenticated && <button className='links' >Add Stock</button> }
                    { isAuthenticated && <Link className='links' to="/Stocks">Stocks</Link> }
                    <Link className='links' to="/Explore">Explore</Link>
                    <Link className='links' to="/About">About</Link>
                    { isAuthenticated && <Link className="links" to="/Profile">Profile</Link>}
                    { isAuthenticated ? (
                        <Link className="links" to="/Login" onClick={handleLogout}>Log Out</Link> 
                    ) : (
                        <Link className="links" to="/Login">Login</Link>
                    )}
                </Nav> 
            </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
export default NavBar;