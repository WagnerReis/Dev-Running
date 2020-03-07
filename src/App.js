import React from 'react';
import './App.css';
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import Header from './Header'

import store from './redux'
import { Provider } from 'react-redux'

class App extends React.Component {
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
        <div className="App">
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
