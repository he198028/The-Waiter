import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router'

import createHistory from 'history/createBrowserHistory';
// import Home from './Components/Home';
import Header from './Components/Header';
import CustomerBasicInfo from './Components/CustomerBasicInfo';
import QueueStatusForBlueShirts from './Components/QueueStatusForBlueShirts';
import QueueStatusForCustomers from './Components/QueueStatusForCustomers';

export const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header></Header>

        <Route path="/home" component={CustomerBasicInfo} />
        <Route path="/bsview" component={QueueStatusForBlueShirts} />
        <Route path="/tvview" component={QueueStatusForCustomers} />



        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
      </div>
    </Router>

  );
}

export default App;
