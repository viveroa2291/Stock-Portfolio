import './App.css';
import {Route, Switch} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Home from './Home';
import About from './About';
function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/about" component={About}/>
      <Route path="/profile" component={Profile}/>
      <Home/>
    </Switch>
  );
}
export default App; 