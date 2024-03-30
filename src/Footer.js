import React from "react";
import {Link} from 'react-router-dom';
import './footer.css';
function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <div className="footer">
            <div className="footer-container">
                    <Link className="footer-buttons" to="/">Home</Link>
                    <br/>
                    <Link className="footer-buttons" to="/About">About</Link>
                    <br/>
                    <Link className="footer-buttons" to="/Explore">Explore</Link>
                    <br/>
                    <Link className="footer-buttons" to="/Login">Login</Link>
            </div>
            <p className="copyright">All Rights Reserve Copyright © {currentYear} <br/> Created by Adan Vivero</p>
        </div>
    )
}
export default Footer;