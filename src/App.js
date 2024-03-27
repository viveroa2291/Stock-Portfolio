import './App.css';
import {Route, Switch} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Home from './Home';
import About from './About';
import { useState } from 'react';
import  Navbar from './Navbar';
import Stocks from './components/Stocks';
import Explore from './components/Explore';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleLogin = (firstName) => {
      setIsAuthenticated(true);
      setFirstName(firstName);
      localStorage.setItem('isAuthenticated', true); // Store userId in localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); 
  }

  return (
    <div>    
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} handleLogin={handleLogin} />} />
        <Route path="/signup" component={Signup}/>
        <Route path="/about" component={About}/>
        <Route path="/profile" render={(props) => ( <Profile {...props} isAuthenticated={isAuthenticated} firstName={firstName}/> )} />
        <Route path="/stocks" render={(props) => (<Stocks {...props} isAuthenticated={isAuthenticated} />)} />
        <Route path="/explore" component={Explore}/>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
export default App; 