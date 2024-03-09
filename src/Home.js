import React from "react";
import './home.css';
function Home () {
    return(
        <div>
            <span className="body-message">
                <h1>Manage Your Stock Portfolio</h1>
                <h2>What tools we offer</h2>
                <div className="body-list">
                    <ul>
                        <li>Stock Surge</li>
                        <li>Stock Decline</li>
                        <li>Dividend Upturn</li>
                        <li>Dividend Setback</li>
                        <li>Cash Flow Boom</li>
                        <li>Cash Flow Dip</li>
                    </ul>  
                </div>
            </span>
        </div>
    )
}
export default Home;