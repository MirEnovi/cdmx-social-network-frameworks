import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase'; // Importamos Firebase


// Importamos componentes
import Nav from '../Global/Nav/Nav'; 
import NewComent from '../Global/NewComents/NewComents'; 
import Coments from '../Global/Coments/Coments';

//Data
import items from '../../data/menu';

class Muro extends Component {
  constructor () {
    super()
    this.state = { 
      user: null,
      // coments : [],
			newComent:'',
    }
  }
  componentWillMount = () => {
    const user = firebase.auth().currentUser;
    if (user) {   
      this.setState({
        user
      })
    }
  }

  onInputChange = (valorNewComent) => {
    this.setState({
      nameComent: valorNewComent
    })
  }

  onSubmit = () => {

  }
  
  
  render() {
    if(this.state.user) {
			return (
        <div className='Muro'>
          <header>
          <Nav title = {this.state.user.displayName} photo = {this.state.user.photoURL} email = {this.state.user.email}items = { items } />
          </header>

          <NewComent nameTask={this.state.newComent}
                  onInputChange={this.onInputChange}
                  onSubmit={this.onSubmit}
          />
          <Coments contentComent = {this.state}/>
        </div>
      )
    } else {
      return <Redirect to = '/'/>;
    }
  }
}

export default Muro;
