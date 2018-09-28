// Apendice de la aplicacion, este archivo no tiene logica

import React from 'react'; // Biblioteca en si
import { render } from 'react-dom'; // Dependencia para el navegador

//Routes
import AppRoutes from './routes';

import './index.css'; // styles de toda la pagina
import registerServiceWorker from './registerServiceWorker'; // Simula servidor

render(
    <AppRoutes />
    , document.getElementById('root'));


registerServiceWorker();

