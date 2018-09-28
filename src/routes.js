// Dependencias
import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';

// Components
import App from './components/App';
import Login from './components/LoginPage'; // Componente Login
import Muro from './components/Muro';
import Perfil from './components/Perfil'
import Page404 from './components/Page404';

const AppRoutes = () => {
    return (
    <App>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path = '/' component = { Login } exact />
                <Route path = '/muro' component = { Muro } exact />
                <Route path = '/perfil' component = { Perfil } exact />
                <Route component = { Page404 } />
            </Switch>
        </BrowserRouter>
    </App>
    )
}

export default AppRoutes;