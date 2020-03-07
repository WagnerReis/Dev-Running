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
  /*async componentDidMount() {
    const token = localStorage.getItem('token')
    if (!token) {
      const login = await axios.post('http://localhost:3001/users/login', {
        email: 'wagner@gmail.com',
        passwd: 'abc123'
      })
      const token = login.data.token
      localStorage.setItem('token', token)
    }
    const decoded = jwtDecode(token)
    console.log(decoded)

    const user = await axios.get('http://localhost:3001/users/me', {
      headers: {
        Authorization: 'Bearer '+token
      }
    })
  }*/
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
