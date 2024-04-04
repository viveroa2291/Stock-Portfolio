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
                <button>Yearly Growth</button>
                <button>Quarterly Growth</button>
                <button>Yearly Percentage Growth</button>
            </div>
            <div className='stocks-button'>
                <button>All Stocks dividends</button>
                <button>Quarterly Stock Dividends</button>
            </div>
            <div className='stocks-button'>
                <button>Yearly Dividend Stocks</button>
                <button>Monthly Dividend Stocks</button>
                <button>January Quarterly Stocks</button>
                <button>February Quarterly Stocks</button>
                <button>March Quarterly Stocks</button>     
            </div>
        </div>
    )
};

export default Dividends;