import React from 'react';
import { Redirect} from 'react-router-dom';
import '../CSS/stocks.css';
function Stocks ({isAuthenticated}) {        
    if(!isAuthenticated) {
        return <Redirect to="/login" />;  
    }
    return (
        <div>

        </div>
    )
};

export default Stocks;