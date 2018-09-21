// Apendice de la aplicacion, este archivo no tiene logica

import React from 'react'; // Biblioteca en si
import ReactDOM from 'react-dom'; // Herramienta para el navegador
import './index.css'; // styles de toda la pagina
import App from './App'; // Importamos App
import registerServiceWorker from './registerServiceWorker'; // Simula servidor
import Firebase from 'firebase'; // Importamos Firebase

// Metodo de Firebase para agregar credenciales
Firebase.initializeApp({
    apiKey: "AIzaSyC63unMCxi_u8dtxjfWg70ot0fGpcRKF9E",
    authDomain: "react-social-network-ef787.firebaseapp.com",
    databaseURL: "https://react-social-network-ef787.firebaseio.com",
    projectId: "react-social-network-ef787",
    storageBucket: "react-social-network-ef787.appspot.com",
    messagingSenderId: "286421353077"
})

//renderizamos App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

