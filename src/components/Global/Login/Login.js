import React, { Component } from 'react';
import logo from '../../assets/taco.png'; // Importamos imagen logo
import './Login.css'; // Importamos estilos
import {Button, Col, Row} from 'react-materialize'; // importamos elementos de Materialize
import firebaseInit from '../../../config/firebaseCredentials'; // Importamos Firebase


class Login extends Component {
  // Función de login con Google
  handleAuthG() {
    const provider = new firebaseInit.auth.GoogleAuthProvider();
    firebaseInit.auth().signInWithPopup(provider).then((result) => {
        return console.log(`${result.user.email} ha iniciado sesión`);
    }).catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
  }
  // Función de login con Facebook
  handleAuthF() {
    const provider = new firebaseInit.auth.FacebookAuthProvider();
    firebaseInit.auth().signInWithPopup(provider).then((result) => {
        return console.log(`${result.user.email} ha iniciado sesión`);
    }).catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
  }
  // Función de logouth
  // handleLogouth() {
  //   firebaseInit.auth().signOut().then(() => console.log('Desconectado'))
  //   .catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
  // }

  render() {
    return (
      <div className="Login">
        <header>
          <img src={logo} className="Login-logo" alt="logo" />
          <h1 className="Login-title Login-body">
            Mexican Food Lovers
          </h1>
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
              <Button waves='light' className='red' onClick={this.handleAuthG}>Google</Button>
            </Col>
            {/* <Col s={4}>
              <Button waves='light' className='orange darken-2' onClick={this.handleLogouth}> Salir </Button>
            </Col> */}
          </Row>   
        </div>
      </div>
    );                     
  }
}

export default Login;
