import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase'; // Importamos Firebase
// import db from '../../config/firebaseCredentials'


// Importamos componentes
import Nav from '../Global/Nav/Nav'; 
import NewComent from '../Global/NewComents/NewComents'; 
import Coments from '../Global/Coments/Coments';

//Data
// import items from '../../data/menu';

class Muro extends Component {
  constructor () {
    super()
    this.state = { 
      user: null,
      userComent : [],
			newComent:'',
    }
  }
  componentWillMount = () => {
    console.log('componentWillMount ');
    const user = firebase.auth().currentUser;
    if (user) {   
      this.setState({ user })
    }
  }

  componentDidMount  = () => {
    const db = firebase.firestore();
    const comentsRef = db.collection('coments');
    comentsRef.onSnapshot((querySnapshot) => {
      const arrUserComent = [];
      querySnapshot.forEach((doc) => {
        const objComent = {
          coment: doc.data().coment,
          photo: doc.data().photo,
          user: doc.data().user,
          userUid: doc.data().userUid,
          comentUid: doc.data().comentUid,
        }
        arrUserComent.push(objComent);
      })
      // console.log(arrUserComent);
      this.setState({
        userComent: arrUserComent
      })
    })
  }
  
  onTextChange = (valorNewComent) => {
    this.setState({
      newComent: valorNewComent
    })
  }

  
  onSubmit = () => {
    const { user, newComent } = this.state;
    const db = firebase.firestore();
    const n = new Date();
    const times = n.getTime();
    const userComentRef = db.collection('coments').doc(`${times}-${user.uid}`);
    const userComent = {
      time: times,
      user: user.displayName,
      photo: user.photoURL,
      userUid: user.uid,
      coment: newComent,
      comentUid: `${times}-${user.uid}`,
    }
    return (
      userComentRef.set(userComent).then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    })
    )
  }
  
  deleteComent = (userUid, comentUid) => {
    if (userUid === this.state.user.uid){
      const db = firebase.firestore();
      const comentsRef = db.collection('coments');
      comentsRef.doc(comentUid).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    } else {
      alert('No puedes borrar este comentario')
    }
  }
  
  render() {
    if(this.state.user) {
			return (
        <div className='Muro'>
          <header>
          <Nav  title = {this.state.user.displayName} photo = {this.state.user.photoURL} email = {this.state.user.email} />
          </header>

          <NewComent  newComent = {this.state.newComent}
                      onTextChange = {this.onTextChange}
                      onSubmit = {this.onSubmit}
          />
          
          <Coments Coments = {this.state.userComent}
                    delete = {this.deleteComent}/>
        </div>
      )
    } else {
      return <Redirect to = '/'/>;
    }
  }
}

export default Muro;
