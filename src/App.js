import React from "react";
import ItemList from './Items/ItemList';
import Item from './Items/Item';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/items' component={ItemList} />
      <Route path='/items/:id' component={Item} />
    </div>
  );
}

export default App;
