import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase'; // Importamos Firebase
import firebaseInit from '../../config/firebaseCredentials'; // 

import Nav from '../Global/Nav/Nav'; // Importamos componente Nav

//Data
import items from '../../data/menu';

class Perfil extends Component {
  constructor () {
    super()
    this.state = { 
      user: null,
    }
  }
  componentWillMount = () => {
    const user = firebase.auth().currentUser;
    if (user) {   
      console.log(user);
      this.setState({
        user
      })
    }
  }

  render() {
    if(this.state.user) {
      return (
        <div className='Perfil'>
          <Nav title = 'Mexican Food Lovers' items = { items } />
          <h1>
            Perfil Page
          </h1>
        </div>
      );
    } else {
      return <Redirect to = '/'/>;
    }; 
  }
}

export default Perfil;
