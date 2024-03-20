import React, {useState} from "react";
import {Link } from 'react-router-dom';
import '../CSS/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Signup() {
    // Setting the variables to empty and are being linked with the name attribute in the <input> tag.
    const[formData, setFormData] = useState({
        fname: '', lname: '', username: '', email: '', password: '', cpassword: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.cpassword) {
            alert("Password do not match");
            return;
        }
        try { 
            const response = await fetch('http://localhost:3306/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if(response.ok) {
                console.log('Signup Successful');
            }
            else {
                console.error('Signup Failed');
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    };
    return (
        <div>
            <div className="signup-container">
                <form onSubmit={handleSubmit}>
                    <div className="heading">
                        <label for='fname'>First Name:</label> 
                        <input id="fname" name="fname" onChange={handleInputChange} />                          
                        <label for='lname'>Last Name:</label>
                        <input id="lname" name="lname" onChange={handleInputChange}/> 
                        <label for='username'>Username:</label>
                        <input id="username" name="username" onChange={handleInputChange}/>
                        <label for='email'>Email Address:</label>
                        <input id="email" name="email" onChange={handleInputChange}/>
                        <label for='password'>Password:</label>
                        <input id="password" name="password" onChange={handleInputChange}/>
                        <label for='cpassword'>Confirm Password:</label>
                        <input id="cpassword" name="cpassword" onChange={handleInputChange}/>
                    </div>
                </form>
                <button type="submit" className="btn btn-dark create-account">Create An Account</button>
                <div className="login-section">
                    <p>Already Have An Account?</p>                
                    <Link className="btn btn-primary login-button" to="/Login">Login Here</Link>
                </div>
            </div>        
        </div>
    )
}
export default Signup;