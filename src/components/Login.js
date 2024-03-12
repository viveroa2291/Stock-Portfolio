import React from "react";
import {Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/login.css';
import { useState } from "react";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
    }
    return(
        <div>
            <div className="login-span">            
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label for="email">Email:</label>
                        <br/> <input className="email-input" type="email" placeholder="Enter Email" name="email" onChange={e => setEmail(e.target.value)}/> <br/> 
                    </div>
                    <div>
                        <label for="password">Password:</label>
                        <br/> <input className="password-input" type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}/> <br/>
                    </div>
                </form>
                <button className="btn btn-success mt-1">Login</button>
                <button className="btn btn-dark m-2"><Link className="signup-button" to="/Signup">Signup</Link></button>
            </div>
        </div>
    )
}
export default Login;