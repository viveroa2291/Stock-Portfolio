import React, {useEffect, useState } from "react";
import {Nav, Navbar, Modal, Button, Dropdown} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import logo from './images/logo.png';
import user from './images/user.png';
import './navbar.css';
function NavBar ({ isAuthenticated, handleLogout, userId, firstName}) {
    const [data, setData] = useState(null);    
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchBarFocused, setSearchBarFocused] = useState(false);
    const [selectedTicker, setSelectedTicker] = useState(null);
    const [selectedStock, setSelectedStock] = useState(null);
    const [showStockData, setShowStockData] = useState(false);
    const [showStockName, setStockName] = useState(false);
    
    const[formData, setFormData] = useState({
        id: userId,  ticker: '', numberOfShares: '', priceBought: '' 
    })
    console.log("The user id is: " + userId);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }
    const toggleModal = () => {
        setShowModal(!showModal);
    };
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

            // const formattedYesterday = yesterday.toISOString().split('T')[0];
            // const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${formattedYesterday}/${formattedYesterday}?adjusted=true&sort=asc&limit=1&apiKey=1PLJT6aBkJqCXlmfbX6lqa0bp6WzEHTK`);
            const response = await fetch(`https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/2024-03-28/2024-03-28?adjusted=true&sort=asc&limit=1&apiKey=1PLJT6aBkJqCXlmfbX6lqa0bp6WzEHTK`); 
            const stockData = await response.json();
            setSelectedStock(stockData.results[0]);
            setSelectedTicker({ticker});
            setShowStockData(true);

            const nameResponse = await fetch(`https://api.polygon.io/v3/reference/tickers?ticker=${ticker}&active=true&apiKey=1PLJT6aBkJqCXlmfbX6lqa0bp6WzEHTK`); 
            const stockName = await nameResponse.json();
            setStockName(stockName.results[0]);
            console.log("This is the stock name: " + stockName.results[0].name);
        } catch (error) {
            console.error('Error fetching the stock Data: ', error);
        };
    }
    const handleSearchFocus = () => {
        setShowStockData(false); // Hide stock data div when search bar is focused
        setSearchBarFocused(true);
    }
    const handleSearchBlur = () => {
        if(!searchQuery) {
            setShowStockData(true);
        }            
        setTimeout(() => {
            setSearchBarFocused(false); 
        }, 200);
    }
    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3306/addStock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({formData})
            });
            if (response.ok) {
                console.log('Stock Succesfully Added');                
            } else {
                console.error('Failed to add stock');
            }
        } catch (error) {
            console.error('Error saving changes:', error);
        }
    };
    return (
        <div className="navbar-body">
            <Navbar collapseOnSelect expand="lg" variant="primary" className='navigation-bar'>
                <Navbar.Brand className='home-logo' href='/'><img className="logo" src={logo} alt="This will be the main logo"/></Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-container">
                        { location.pathname === "/Stocks" && isAuthenticated && <button className='links' onClick={toggleModal} title="Add a Stock to your portfolio.">Add Stock</button> }
                        { isAuthenticated && <Link className='links' to="/Stocks">Stocks</Link> }
                        { isAuthenticated && <Link className='links' to="/Dividends">Dividends</Link> }
                        <Link className='links' to="/Explore">Explore</Link>
                        <Link className='links' to="/About">About</Link>
                        { isAuthenticated ?
                        <Dropdown className="dropDown">
                             <Dropdown.Toggle className="settings-button" >
                                <img className="user-logo" src={user} alt="User Logo"/> 
                             </Dropdown.Toggle>
                             <Dropdown.Menu className="dropdown-menu">
                                   <Dropdown.Item className="dropdown-items"><Link className="profile-link" to="/Profile">Profile</Link></Dropdown.Item> 
                                   <Dropdown.Item className="dropdown-items"><Link className="profile-link" to="/Settings">Settings</Link></Dropdown.Item>
                                   <Dropdown.Item className="dropdown-items" onClick={handleLogout} title="Log out of your account.">Logout</Dropdown.Item> 
                             </Dropdown.Menu>
                        </Dropdown>
                        : 
                        <Link className="links" to="/Login" title="Log in to your account.">Login</Link>
                        }
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
            <p>The id is: {userId} and first name is {firstName}</p>
        <Modal show={showModal} onHide={toggleModal}>                
            <form onSubmit={handleSaveChanges}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Add Stock</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">           
                    <label htmlFor="stock-ticker">Stock Ticker</label>
                    <br/>
                    <input className="stock-input" type="text" name="stock-ticker" placeholder="Enter Stock..." title="Enter a stock ticker." value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
                    { searchBarFocused && searchQuery && filterData.length > 0 ? (
                        filterData.map((item) => (
                            <p className="enter-stock" key={item.T} onClick={() => handleClick(item.T)} style={{margin: '0', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>{item.T}</p>
                        ))
                    ) : null }
                    <br/>
                    <label htmlFor="shares-number">Number of Shares</label>
                    <br/>
                    <input className="stock-input" type="number" name="shares-number" placeholder="Enter Number of Shares..." title="Enter the number of shares." />
                    <br/>
                    <label htmlFor="bought-price">Price Bought</label>
                    <br/>
                    <input className="stock-input" type="text" name="bought-price" placeholder="Enter Bought Price..." title="Enter the price the stock was bought." />
                    <br/>
                </Modal.Body>
                <Modal.Footer className="modal-footer">                
                    <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                    <Button variant="secondary" onClick={toggleModal}>Close</Button>
                </Modal.Footer>                
            </form>
        </Modal>
        </div>
    )
}
export default NavBar;