import React, { Component } from 'react';
import logo from '../../assets/taco.png'; // Importamos imagen logo
import './Login.css'; // Importamos estilos
import {Button} from 'react-materialize'; // importamos elementos de Materialize
import firebase from 'firebase'; // Importamos Firebase


class Login extends Component {
  // Función de login con Google
  handleAuthG() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        return console.log(`${result.user.email} ha iniciado sesión`);
    }).catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
  }
  // Función de login con Facebook
  handleAuthF() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        return console.log(`${result.user.email} ha iniciado sesión`);
    }).catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
  }
  // Función de logouth
  handleLogouth() {
    firebase.auth().signOut().then(() => console.log('Desconectado'))
    .catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
  }

  render() {
    return (
      <div className="Login">
        <header>
          <img src={logo} className="Login-logo" alt="logo" />
        </header>
        <div>
        <h1 className="Login-title Login-body">
          Mexican Food Lovers
        </h1>
        <p>
          {this.props.titulo}
        </p>

        <Button waves='light' className='indigo darken-4' s={4} onClick={this.handleAuthF}>Facebook</Button>

        <Button waves='light' className='red' s={4} onClick={this.handleAuthG}>Google</Button>

        <Button waves='light' className='orange darken-2' s={4} onClick={this.handleLogouth}> Salir </Button>
        
        </div>
      </div>
    );                     
  }
}

export default Login;
