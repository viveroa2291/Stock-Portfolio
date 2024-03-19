import React from "react";
import {Link } from 'react-router-dom';
import '../CSS/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Signup() {
    return (
        <div>
            <div className="signup-container">
                <form>
                    <div className="heading">
                        <label for='fname'>First Name:</label> 
                        <input id="fname"/>                          
                        <label for='lname'>Last Name:</label>
                        <input id="lname"/> 
                        <label for='username'>Username:</label>
                        <input id="username"/>
                        <label for='email'>Email Address:</label>
                        <input id="email"/>
                    </div>
                </form>
                <button className="btn btn-dark create-account">Create An Account</button>
                <div className="login-section">
                    <p>Already Have An Account?</p>                
                    <Link className="btn btn-primary login-button" to="/Login">Login Here</Link>
                </div>
            </div>        
        </div>
    )
}
export default Signup;