import React from 'react';
import { Redirect} from 'react-router-dom';

function Settings ({isAuthenticated, firstName, lastName, username}) {
    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }
    return(
        <div>
            <p>Settings page coming soon</p>
        </div>
    )
}
export default Settings;