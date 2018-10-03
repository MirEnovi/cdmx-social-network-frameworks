// File que importa todas vistas que tendra el proyecto y las vincula con sus paths

// Dependencias
import React from 'react';
import {
	Route,
	Switch,
	BrowserRouter
} from 'react-router-dom';

// Componentes de vistas
import App from './components/App'; // Componente Principal
import Login from './components/LoginPage';
import Muro from './components/Muro'; 
import Page404 from './components/Page404';

const AppRoutes = () => {
	return (
	<App>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route path = '/' component = { Login } exact />
				<Route path = '/muro' component = { Muro } exact />
				<Route component = { Page404 } />
			</Switch>
		</BrowserRouter>
	</App>
	)
}

export default AppRoutes;
