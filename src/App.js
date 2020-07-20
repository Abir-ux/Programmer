import React from 'react';
import './App.css';
import Register from './components/first part/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './components/login-part/Log-in';
import HomePage from './components/home-page/Home-page';






function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Registration">
           <Register></Register>
          </Route>

          <Route path="/Login">
            <LogIn></LogIn>
          </Route>

          <Route path="/home-page">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
