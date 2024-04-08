import './App.css';
import {Route, Switch} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Home from './Home';
import About from './About';
import { useState } from 'react';
import  NavBar from './Navbar';
import Stocks from './components/Stocks';
import Explore from './components/Explore';
import Dividends from './components/Dividends';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = (firstName, lastName, username) => {
      setIsAuthenticated(true);
      setFirstName(firstName);
      setLastName(lastName);
      setUsername(username);
      localStorage.setItem('isAuthenticated', true); // Store userId in localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); 
  }

  return (
    <div>    
      <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} handleLogin={handleLogin} />} />
        <Route path="/signup" component={Signup}/>
        <Route path="/about" component={About}/>
        <Route path="/profile" render={(props) => ( <Profile {...props} isAuthenticated={isAuthenticated} firstName={firstName} lastName={lastName} username={username} /> )} />
        <Route path="/stocks" render={(props) => (<Stocks {...props} isAuthenticated={isAuthenticated} firstName={firstName} lastName={lastName} username={username} />)} />
        <Route path="/explore" component={Explore}/>
        <Route path="/dividends" component={Dividends}/>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
export default App; 