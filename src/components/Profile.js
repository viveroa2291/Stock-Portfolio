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
                <p>Welcome {firstName}, here is your portfolio</p>
            </div>
            <div className='stock-table'>
                <table>
                    <tr>
                        <th>Stock</th>
                        <th>Symbol</th>
                        <th>Shares</th>
                        <th>Average Cost</th>
                        <th>Price</th>
                        <th>Stock Growth</th>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>AAPL</td>
                        <td className='shares'>2</td>
                        <td>54.99</td>
                    </tr>
                    <tr>
                        <td>JP Morgan Chase</td>
                        <td>JPM</td>
                        <td className='shares'>1</td>
                    </tr>
                    <tr>
                        <td>Microsoft</td> 
                        <td>MSFT</td>             
                        <td className='shares'>1</td>          
                    </tr>
                    <tr>

                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Profile;