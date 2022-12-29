import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';


function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
