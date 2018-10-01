import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import {Button, Col, Row} from 'react-materialize'; // importamos elementos de Materialize

import firebase from 'firebase'; // Importamos Firebase
import firebaseInit from '../../../config/firebaseCredentials'; // Importamos Firebase

import './Login.css'; // Importamos estilos
import logo from '../../assets/taco.png'; // Importamos imagen logo



class Login extends Component {
  constructor () {
    super()
    this.state = { 
      user: null,
    }
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      })
    })
  }

  // Función de login con Google
  handleAuthG = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log(result.user); 
      console.log(result.user.displayName);
      console.log(result.user.photoURL);
      
      return console.log(`${result.user.email} ha iniciado sesión`);
    }).catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
  }
  // Función de login con Facebook
  handleAuthF = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log(result.user); 
      console.log(result.user.displayName);
      console.log(result.user.photoURL);

      return console.log(`${result.user.email} ha iniciado sesión`);
    }).catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
  }

  render() {
    if(this.state.user) {
			return <Redirect to = '/muro'/>
		} else {
      return (
        <div className="Login">
          <header>
            <img src={logo} className="Login-logo" alt="logo" />
          </header>
          <div>
          <Row className= 'flow-text'>
            <h6>
              {this.props.titulo}
            </h6>

            <Col s={12} l={6}>
              <Button waves='light' className='indigo darken-4 ' onClick={this.handleAuthF}>Facebook</Button>
            </Col>

            <Col s={12} l={6}>
              <Button waves='light' className='red darken-4' onClick={this.handleAuthG}>Google</Button>
            </Col>
          </Row>   
          </div>
        </div>
      );
    }                     
  }
}

export default Login;
