import React, { Component } from 'react';
import './App.css';
import {Home} from "./pages/Home";
import {Transaction} from "./pages/Transaction";
import {Profile} from "./pages/Profile"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "./data/data.json"

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/:id" component={Transaction}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
