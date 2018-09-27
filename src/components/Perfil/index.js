import React, { Component } from 'react';
import Nav from '../Global/Nav/Nav'; // Importamos componente Nav

//Data
import items from '../../data/menu';

class Perfil extends Component {
    render() {
        return (
            <div className='Perfil'>
                <Nav title = 'Mexican Food Lovers' items = { items } />
                <h1>
                    Perfil Page
                </h1>
            </div>
        );
    }
}

export default Perfil;