import React from 'react';
import { Redirect} from 'react-router-dom';
import '../CSS/stocks.css';
function Stocks ({isAuthenticated, firstName, lastName, username, stocks}) {        
    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }
    return (
        <div>
            <div className='stock-header'>
                <p>Hello {firstName}, here is your Stock portfolio</p> 
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
                </table>
            </div>
        </div>
    )
};

export default Stocks;