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
                        <th className='stock-header'>Stock</th>
                        <th className='stock-header'>Symbol</th>
                        <th className='stock-header'>Shares</th>
                        <th className='stock-header'>Average Cost</th>
                        <th className='stock-header'>Price</th>
                        <th className='stock-header'>Stock Growth</th>
                        <th className='stock-header'>Profit/Loss</th>
                        <th className='stock-header'>Annual Income</th>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default Stocks;