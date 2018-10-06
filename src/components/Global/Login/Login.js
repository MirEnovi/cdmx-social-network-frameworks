import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import {Button, Col, Row} from 'react-materialize'; // importamos elementos de Materialize

import firebase from 'firebase'; // Importamos Firebase
import { Firebase, db } from '../../../config/firebaseCredentials';

import FormNewUser from '../FormNewUser/FormNewUser'

import './Login.css'; // Importamos estilos
import logo from '../../assets/taco.png'; // Importamos imagen logo
import facebook from '../../assets/facebook.png';
import google from '../../assets/google-plus.png'



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
          <Row className= 'flow-text login-buttons col l8 '>
            <Col s={12} m={4}>
              {/* <Button waves='light' className='indigo darken-4 ' onClick={this.props.facebook}>
                facebook
              </Button> */}
              <img src={facebook} alt='facebook' height='60' width='60' onClick={this.props.facebook}></img>
            </Col>
            <Col s={12} m={4}>
              <FormNewUser/>
            </Col>
            <Col s={12} m={4}>
              {/* <Button waves='light' className='red darken-4' onClick={this.props.google}>Google</Button> */}
              <img src={google} alt='google' height='60' width='60' onClick={this.props.google}></img>
            </Col>
          </Row>   
          </div>
        </div>
      );
    }                     
  }
}

export default Login;
