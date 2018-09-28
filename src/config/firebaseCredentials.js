import firebase from 'firebase'; // Importamos Firebase

// Metodo de Firebase para agregar credenciales
const firebaseCredentials = {
  apiKey: "AIzaSyC63unMCxi_u8dtxjfWg70ot0fGpcRKF9E",
  authDomain: "react-social-network-ef787.firebaseapp.com",
  databaseURL: "https://react-social-network-ef787.firebaseio.com",
  projectId: "react-social-network-ef787",
  storageBucket: "react-social-network-ef787.appspot.com",
  messagingSenderId: "286421353077"

};
const firebaseInit = firebase.initializeApp(firebaseCredentials);

export default { firebaseInit }