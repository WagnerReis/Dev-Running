import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import Header from './Header'

import store from './redux'
import { Provider } from 'react-redux'
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Home from './screens/Home'
import Admin from './screens/Admin'
import Restrito from './screens/Restrito'
import Login from './screens/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/restrito' component={Restrito} />
          <Route path='/login' component={Login} />
          <div className="App">
            <Header />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
