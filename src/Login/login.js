import React, { Component } from 'react';
import logo from '../assets/taco.png';
import './login.css';
import {Button} from 'react-materialize';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <row>
        <header>
          <img src={logo} className="Login-logo" alt="logo" />
        </header>
        </row>
        <row>
          <p className="App-title Login-body">
            Inicia Sesión
          </p>
          <Button waves='light' className='indigo darken-4 '>Facebook</Button>
          <Button waves='light' className='red'>Google</Button>
        </row>
      </div>
    );
  }
}


export default Login;
