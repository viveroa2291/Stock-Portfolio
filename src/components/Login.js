import React from "react";
import {Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/login.css';
import { useState } from "react";
function Login({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3306/Login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });
            
            if (response.ok) {
                const data = await response.json();
                handleLogin(data.firstName, data.lastName, data.username);
                console.log("This is the first name: " + data.firstName + " Test");
                console.log("This is the username: " + data.username + " Test"); 
                history.push('/profile');
                // const {firstName} = data;
                // history.push(`/profile?firstName=${firstName}`);
            } else {
                alert('Login failed. Please check your login credentials');
            }
        } catch (error) {
            console.error('Error logging in: ', error);
            alert('Error logging in. Please try again later');
        }
    };
    return(
        <div>
            <div className="login-span">            
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="username">Username:</label>
                        <br/> <input className="username-input" type="username" placeholder="Enter Username" name="username" onChange={e => setUsername(e.target.value)}/> <br/> 
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <br/> <input className="password-input" type={showPassword ? "text" : "password"} placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/> <br/>
                        <label>
                            <input className="checkbox" type="checkbox" id="showPassword" name="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
                            Show Password
                        </label>
                    </div>
                </form>
                <button className="btn btn-success mt-1" onClick={handleSubmit}>Login</button>
                <button className="btn btn-dark m-2"><Link className="signup-button" to="/Signup">Signup</Link></button>
            </div>
        </div>
    )
}
export default Login;