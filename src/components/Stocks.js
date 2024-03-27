import React from 'react';
import '../CSS/stocks.css';
function Stocks () {
    return (
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

export default Stocks;