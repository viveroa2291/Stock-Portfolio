import React from 'react';
import { Redirect} from 'react-router-dom';
import '../CSS/profile.css';

function Profile({ isAuthenticated, firstName, lastName, username}) {
    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }
    return(
        <div>
            <p>Profile page coming soon</p>
        </div>
    )
}
export default Profile;