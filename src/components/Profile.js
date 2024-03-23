import React from 'react';
import { Redirect } from 'react-router-dom';

function Profile({ isAuthenticated }) {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('firstName');

    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }

    return(
        <div>
            <p>Welcome {firstName}</p>
        </div>
    )
}
export default Profile;