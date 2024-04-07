import React, { useState } from "react";
import {Nav, Navbar, Modal, Button, Dropdown} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import logo from './images/logo.png';
import user from './images/user.png';
import './navbar.css';
function NavBar ({ isAuthenticated, handleLogout }) {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div className="navbar-body">
            <Navbar collapseOnSelect expand="lg" variant="primary" className='navigation-bar'>
                <Navbar.Brand className='home-logo' href='/'><img className="logo" src={logo} alt="This will be the main logo"/></Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-container">
                        { location.pathname === "/Stocks" && isAuthenticated && <button className='links' onClick={toggleModal}>Add Stock</button> }
                        { isAuthenticated && <Link className='links' to="/Stocks">Stocks</Link> }
                        { isAuthenticated && <Link className='links' to="/Dividends">Dividends</Link> }
                        <Link className='links' to="/Explore">Explore</Link>
                        <Link className='links' to="/About">About</Link>
                        { isAuthenticated && <Link className="links" to="/Profile">Profile</Link>}
                        { isAuthenticated ?
                        <Dropdown className="dropDown">
                             <Dropdown.Toggle className="settings-button" variant="success">
                                <img className="user-logo" src={user} alt="User Logo"/> 
                             </Dropdown.Toggle>
                             <Dropdown.Menu>
                                   <Dropdown.Item className="dropdown-item" onClick={handleLogout}>Logout</Dropdown.Item> 
                             </Dropdown.Menu>
                        </Dropdown>
                        : 
                        <Link className="links" to="/Login">Login</Link>
                        }
                    </Nav> 
                </Navbar.Collapse>
            </Navbar>
        <Modal show={showModal} onHide={toggleModal}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">Add Stock</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <label htmlFor="stock-ticker">Stock Ticker</label>
                <br/>
                <input className="stock-input" type="text" name="stock-ticker" placeholder="Enter Stock..."/>
                <br/>
                <label htmlFor="shares-number">Number of Shares</label>
                <br/>
                <input className="stock-input" type="text" name="shares-number" placeholder="Enter Number of Shares..."/>
                <br/>
                <label htmlFor="bought-price">Bought Price</label>
                <br/>
                <input className="stock-input" type="text" name="bought-price" placeholder="Enter Bought Price..."/>
                <br/>
            </Modal.Body>
            <Modal.Footer className="modal-footer">                
                <Button variant="primary" >Save Changes</Button>
                <Button variant="secondary" onClick={toggleModal}>Close</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}
export default NavBar;