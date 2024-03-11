import React from "react";
import {Link } from 'react-router-dom';
import '../CSS/login.css';
function Login() {
    return(
        <div>
            <span className="login-span">            
                <form>
                    <label for="email">Email:</label>
                    <br/>
                    <input type="text" name="email" required/>
                    <br/>
                    <label for="password">Password:</label>
                    <br/>
                    <input type="text" /> <br/>
                </form>
                <button>Login</button>
                <button><Link className="signup-button" to="/Signup">Signup</Link></button>
            </span>
        </div>
    )
}
export default Login;