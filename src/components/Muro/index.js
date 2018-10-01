import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase'; // Importamos Firebase
import firebaseInit from '../../config/firebaseCredentials'; // Importamos Firebase

import Nav from '../Global/Nav/Nav'; // Importamos componente Nav
import NewComent from '../Global/NewComents/NewComents'; // Importamos componente Nav

//Data
import items from '../../data/menu';

class Muro extends Component {
  constructor () {
    super()
    this.state = { 
      user: null,
    }
  }
  componentWillMount = () => {
    const user = firebase.auth().currentUser;
    if (user) {   
      // console.log(user);
      this.setState({
        user
      })
    }
  }
  
  
  render() {
    if(this.state.user) {
			return (
        <div className='Muro'>
          <header>
          <Nav title = {this.state.user.displayName} photo = {this.state.user.photoURL} email = {this.state.user.email}items = { items } />
          </header>
          <NewComent/>
        </div>
      )
    } else {
      return <Redirect to = '/'/>;
    };
  }
}

export default Muro;
