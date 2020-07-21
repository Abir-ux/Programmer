import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import NextResult from './components/NextResult/NextResult';







function App() {
  return (
    <div>
      <Router>
        <Switch>
          
         <Route exact path="/">
           <Register/>
        </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/home-page">
            <HomePage/>
          </Route>
          <Route path="/Quiz">
            <Quiz/>
          </Route>
          <Route path="/result">
            <Result/>
          </Route>
          <Route path="/result-coming-soon">
            <NextResult/>
          </Route>



        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
