import React from 'react';
import { Redirect} from 'react-router-dom';
import "../CSS/dividends.css";
function Dividends(isAuthenticated) {
    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }
    return(
        <div>
            <div className='stocks-button'>
                <button className='dividend-buttons'>Yearly Growth</button>
                <button className='dividend-buttons'>Quarterly Growth</button>
                <button className='dividend-buttons'>Yearly Percentage Growth</button>
            </div>
            <div className='stocks-button'>
                <button className='dividend-buttons'>All Stocks dividends</button>
                <button className='dividend-buttons'>Quarterly Stock Dividends</button>
            </div>
            <div className='stocks-button'>
                <button className='dividend-buttons'>Yearly Dividend Stocks</button>
                <button className='dividend-buttons'>Monthly Dividend Stocks</button>
                <button className='dividend-buttons'>January Quarterly Stocks</button>
                <button className='dividend-buttons'>February Quarterly Stocks</button>
                <button className='dividend-buttons'>March Quarterly Stocks</button>     
            </div>
        </div>
    )
};

export default Dividends;