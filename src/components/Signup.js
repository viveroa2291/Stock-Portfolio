import React from "react";
import '../CSS/signup.css';
function Signup() {
    return (
        <div>
            <form>
                <label>First Name:</label><label>Last Name:</label>
                <span className="signup-names">
                    <br/> 
                    <input></input>
                  
                    <br/>
                    <input></input> 
                </span>
                <br/>
                <label>Username:</label>
                <br/>
                <input></input>
                <br/>
                <label>Email Address:</label>
                <br/>
                <input></input>
                <br/>
            </form>
        </div>
    )
}
export default Signup;