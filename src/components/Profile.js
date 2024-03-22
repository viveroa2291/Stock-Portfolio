import React from 'react';

function Profile() {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('firstName');
    return(
        <div>
            <p>Welcome {firstName}</p>
        </div>
    )
}
export default Profile;