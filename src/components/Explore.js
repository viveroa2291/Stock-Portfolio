import React, {useEffect, useState} from 'react'; 
import '../CSS/explore.css';
function Explore() {
    const [data, setData] = useState(null);    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTicker, setSelectedTicker] = useState(null);
    const [selectedStock, setSelectedStock] = useState(null);
    useEffect(()  => {
        fetch('https://api.polygon.io/v3/reference/dividends?ticker=ORC&apiKey=1PLJT6aBkJqCXlmfbX6lqa0bp6WzEHTK')
        .then(response => response.json()) 
        .then(data => {
            console.log("Dividends Data here: " + data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
        fetch('https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2024-01-09?adjusted=true&include_otc=false&apiKey=1PLJT6aBkJqCXlmfbX6lqa0bp6WzEHTK')
        .then(response => response.json()) 
        .then(data => {
            if (data.results && data.results.length > 0) {
                setData(data.results);
            }
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        }); 
    }, []);  

    const filterData = data ? data.filter(item => item.T.toLowerCase().startsWith(searchQuery.toLowerCase())) : [];

    const handleClick = async (ticker) => {
        try {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 2); 

            const formattedYesterday = yesterday.toISOString().split('T')[0];
            console.log("Yesterdays Date: " + formattedYesterday);
            const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${formattedYesterday}/${formattedYesterday}?adjusted=true&sort=asc&limit=1&apiKey=1PLJT6aBkJqCXlmfbX6lqa0bp6WzEHTK`);
            const stockData = await response.json();
            setSelectedStock(stockData.results[0]);
            setSelectedTicker({ticker});
        } catch (error) {
            console.error('Error fetching the stock Data: ', error);
        };
    }
    return (
        <div>
            <p className='welcome-explore'>Welcome to the Explore page.</p>
            <input className='search-bar' type='text' placeholder='Search Stock...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {searchQuery && filterData.length > 0 ? (
                filterData.map((item) => (
                <p className='stock-ticker' key={item.T} onClick={() => handleClick(item.T)}> {item.T}</p>
            ))
        ) : null }
        { selectedTicker && (
            <div className='stock-data'>
                <p >Ticker: {selectedTicker.ticker}</p>        
                { selectedStock && (
                    <>
                    <p>Opening Price: {selectedStock.o}</p>
                    <p>Close Price: {selectedStock.c}</p>
                    <p>High Price: {selectedStock.h}</p>
                    <p>Low Price: {selectedStock.l}</p>
                    </>
                )}     

            </div>
        )}
        </div>
    )
};

export default Explore;