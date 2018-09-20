// apendice de la aplicacion, este archivi no tiene logica
import React from 'react'; // biblioteca en si
import ReactDOM from 'react-dom'; // herramienta para el navegador
import './index.css'; // styles de toda la pagina
import Login from './Login/login'; // componente Login
import registerServiceWorker from './registerServiceWorker'; // simula servidor

// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

//renderizamos componente Login
ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
