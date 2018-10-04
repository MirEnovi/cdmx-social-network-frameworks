import React, { Component } from 'react';
import firebase from 'firebase'; // Importamos Firebase
import { Firebase, db } from '../../config/firebaseCredentials';

import Login from '../Global/Login/Login'; // Componente Login

class LoginP extends Component {

	// Inicio de Sesion
	sesionOn = (provider) => {
		firebase.auth().signInWithPopup(provider)
		.then((result) => {
			const db = firebase.firestore();
			const userData = {
				userName: result.user.displayName,
				email: result.user.email,
				photo: result.user.photoURL,
				userUid: result.user.uid,
			}
			return (
				db.collection('user').doc(result.user.uid).set(userData).then(() => {
					console.log("Document successfully written!");
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			})
			)
		}).catch((error) => console.log(`Error: ${error.code}: ${error.message}`));

	}

	// Función de login con Google
	handleAuthG = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		return this.sesionOn(provider)
	}

	// Función de login con Facebook
	handleAuthF = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		return this.sesionOn(provider)
	}


	render() {
		return (
			<div className='Login'>
				<Login  facebook = {this.handleAuthF}
								google = {this.handleAuthG}/>
			</div>
		);
	}
}

export default LoginP;
