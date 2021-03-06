import React, { Component } from 'react';
import './App.css';
import {Home} from "./pages/Home";
import {Transaction} from "./pages/Transaction";
import {Dashboard} from "./pages/Dashboard";
import {NotFound} from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
              <Route path="/transactions/:id" component={Transaction}/>
              <Route path="/dashboard" component={Dashboard}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
