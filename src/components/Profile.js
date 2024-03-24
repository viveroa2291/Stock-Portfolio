import React from 'react';
import { Redirect } from 'react-router-dom';
import '../CSS/profile.css';
function Profile({ isAuthenticated }) {
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('firstName');

    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }
    return(
        <div>
            <div className='profile-header'>
                <p>Welcome {firstName}</p>
            </div>
            <div className='stock-table'>
                <table>
                    <tr>
                        <th>Stocks</th>
                        <th>Buying Price</th>
                        <th>Price</th>
                        <th>Stock Growth</th>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>Microsoft</td>                        
                        <td>JPM</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Profile;