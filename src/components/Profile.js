import React from 'react';
import { Redirect} from 'react-router-dom';
import '../CSS/profile.css';

function Profile({ isAuthenticated, firstName, lastName, username}) {
    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }
    return(
        <div>
            <div className='profile-header'>
                <p>Hello {firstName}, here is your portfolio</p> 
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
                        <th>Profit/Loss</th>
                        <th>Annual Income</th>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>AAPL</td>
                        <td className='shares'>2</td>
                        <td>54.99</td>
                        <td>300</td>
                        <td>18% </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>JP Morgan Chase</td>
                        <td>JPM</td>
                        <td className='shares'>1</td>
                        <td>90</td>
                        <td>176.93</td>
                        <td>15%</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Microsoft</td> 
                        <td>MSFT</td>             
                        <td className='shares'>1</td>        
                        <td>0</td>  
                        <td>400</td>
                        <td>400%</td>
                        <td></td>
                        <td>3.96</td>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Profile;