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
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
      setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <div>    
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} handleLogin={handleLogin} />} />
        <Route path="/signup" component={Signup}/>
        <Route path="/about" component={About}/>
        <Route path="/profile" render={(props) => ( <Profile {...props} isAuthenticated={isAuthenticated} /> )} />
        <Route path="/stocks" component={Stocks}/>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
export default App; 