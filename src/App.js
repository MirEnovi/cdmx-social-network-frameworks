import React, { Component } from 'react';
import Login from './components/Login/Login';// componente Login

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
