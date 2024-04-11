import React from 'react';
import { Redirect} from 'react-router-dom';
import '../CSS/settings.css';
function Settings ({isAuthenticated, firstName, lastName, username}) {
    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }
    return(
        <div >
            <div className='settings-header'>
                <p>Profile</p>
            </div>
            <div className='settings-container'>
                <label className='settings-label'>First Name</label>                         
                <input className='settings-input'></input>       
                <label className='settings-label'>Last Name</label>                    
                <input className='settings-input'></input>
                <label className='settings-label'>Email Address</label>
                <input className='settings-input'></input>
                <h2>Security</h2>
                <label className='settings-label'>Password</label>                
                <input className='settings-input'></input>                
                <label className='settings-label'>Change Password</label>
                <input className='settings-input'></input>
                <button>Save</button>
            </div>
        </div>
    )
}
export default Settings;