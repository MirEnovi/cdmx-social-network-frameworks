// Apendice de la aplicacion, este archivo no tiene logica

import React from 'react'; // Biblioteca en si
import { render } from 'react-dom'; // Dependencia para el navegador
import { BrowserRouter as Router } from 'react-router-dom'; // Dependencia para crear rutas

//Routes
import AppRoutes from './routes';

import './index.css'; // styles de toda la pagina
import registerServiceWorker from './registerServiceWorker'; // Simula servidor

// import firebaseInit from '../../config/firebaseCredentials'; // Importamos Firebase

render(
    <Router>
        <AppRoutes />
    </Router>
    , document.getElementById('root'));


registerServiceWorker();

