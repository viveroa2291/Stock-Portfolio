import React from "react";
import {Link} from 'react-router-dom';
import logo from './images/logo.png';
import './footer.css';
function Footer() {
    return(
        <div className="footer">
            <span className="footer-logo">
                <Link className="home-logo" to="/"><img className="logo footer-image" src={logo} alt="This will be the main logo"/></Link>
            </span>
            <span className="footer-container">
                <button className="footer-links"><Link className="about-button" to="/About">About</Link></button>
                <br/>
                <button className="footer-links"><Link className="login-button" to="/Login">Login</Link></button>
            </span>
        </div>
    )
}
export default Footer;