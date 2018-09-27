// Dependencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Login from './components/LoginPage'; // Componente Login
import Muro from './components/Muro';
import Perfil from './components/Perfil'
import Page404 from './components/Page404';

const AppRoutes = () => {
    return (
    <App>
        <Switch>
            <Route path = '/' component = { Login } exact />
            <Route path = '/muro' component = { Muro } exact />
            <Route path = '/perfil' component = { Perfil } exact />
            <Route component = { Page404 } />
        </Switch>
    </App>
    )
}

export default AppRoutes;