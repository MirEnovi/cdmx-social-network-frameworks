import React, { Component } from 'react';
import logo from '../../assets/taco.png';
import './Login.css';
import {Button} from 'react-materialize';

class Login extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return (
      <div className="Login">
        <header>
          <img src={logo} className="Login-logo" alt="logo" />
        </header>
        <p className="App-title Login-body">
          {this.props.titulo}
        </p>
        <Button waves='light' className='indigo darken-4 '>Facebook</Button>
        <Button waves='light' className='red'>Google</Button>
      </div>
    );                     
  }
}

export default Login;
