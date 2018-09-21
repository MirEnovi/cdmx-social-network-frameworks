// apendice de la aplicacion, este archivi no tiene logica
import React from 'react'; // biblioteca en si
import ReactDOM from 'react-dom'; // herramienta para el navegador
import './index.css'; // styles de toda la pagina
import App from './App'; // Importamos App
import registerServiceWorker from './registerServiceWorker'; // simula servidor


//renderizamos App
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

