import React, { Component } from 'react';
import Nav from '../Global/Nav/Nav'; // Importamos componente Nav
import  NewComent from '../Global/NewComents/NewComents'; // Importamos componente Nav

//Data
import items from '../../data/menu';


class Muro extends Component {
    render() {
        return (
            <div className='Muro'>
                <Nav title = 'Mexican Food Lovers' items = { items } />
                <NewComent/>
            </div>
        );
    }
}

export default Muro;