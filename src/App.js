import React from "react";

import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom'

import GetItems from './components/GetItems';
import GetItemInfo from './components/GetItemInfo';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/items'>Items</Link>
          </li>
          <li>
            <Link to='/item-info'>Item Info</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/items'>
            <GetItems />
          </Route>
          <Route exact path='/item-info'>
            <GetItemInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
