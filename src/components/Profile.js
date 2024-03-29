import React from 'react';
import { Redirect} from 'react-router-dom';
import '../CSS/profile.css';

function Profile({ isAuthenticated, firstName, lastName, username}) {
    fetch('https://api.polygon.io/v3/reference/dividends?ticker=ORC&apiKey=1PLJT6aBkJqCXlmfbX6lqa0bp6WzEHTK')
        .then(response => response.json()) 
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
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
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>AAPL</td>
                        <td className='shares'>2</td>
                        <td>54.99</td>
                        <td>300</td>
                        <td>18% </td>
                    </tr>
                    <tr>
                        <td>JP Morgan Chase</td>
                        <td>JPM</td>
                        <td className='shares'>1</td>
                        <td>90</td>
                        <td>176.93</td>
                        <td>15%</td>
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