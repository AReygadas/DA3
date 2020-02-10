import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Eje1 from './Pages/Eje1'

class App extends Component {
  render() {
    return (
      
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Ejercicio1' component={Eje1} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>

        );
  }
}

export default App;
