import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import {Button, Col, Row} from 'react-materialize'; // importamos elementos de Materialize

import firebase from 'firebase'; // Importamos Firebase
import { Firebase, db } from '../../../config/firebaseCredentials';



import './Login.css'; // Importamos estilos
import logo from '../../assets/taco.png'; // Importamos imagen logo



class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }

  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      })
    })
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
          <Row className= 'flow-text '>
            <Col s={12} m={6}>
              <Button waves='light' className='indigo darken-4 ' onClick={this.props.facebook}>Facebook</Button>
            </Col>

            <Col s={12} m={6}>
              <Button waves='light' className='red darken-4' onClick={this.props.google}>Google</Button>
            </Col>
          </Row>   
          </div>
        </div>
      );
    }                     
  }
}

export default Login;
