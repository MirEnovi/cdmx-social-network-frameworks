// Apendice de la aplicacion, este archivo no tiene logica

import React from 'react'; // Biblioteca en si
import ReactDOM from 'react-dom'; // Herramienta para el navegador
import './index.css'; // styles de toda la pagina
import App from './App'; // Importamos App
import registerServiceWorker from './registerServiceWorker'; // Simula servidor
import Firebase from 'firebase'; // Importamos Firebase

import { FirebaseCredentials } from './config/firebaseCredentials'; 

Firebase.initializeApp({ FirebaseCredentials });

//renderizamos App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
