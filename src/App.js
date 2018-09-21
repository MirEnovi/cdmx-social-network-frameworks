import React, { Component } from 'react';
import Login from './components/Login/Login'; // Componente Login

class App extends Component {
    render() {
        return (
            <div>
                <Login titulo= {"Inicia Sesion"} />
            </div>
        );
    }
}

export default App;