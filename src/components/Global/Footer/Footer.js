import React, { Component } from 'react';
import './Footer.css'; // Importamos estilos
import { Footer } from 'react-materialize'; // importamos elementos de Materialize

class FooterC extends Component {
    render() {
        return (
            <Footer
            moreLinks={
            <a className='z-depth-1 orange-text text-darken-5 right' href="http://www.laboratoria.la/" > © 2018 Laboratoria Ciudad de México </a>
              }
            className='example brown darken-3'>
                <h5 className= 'nav-shadow orange-text text-darken-5 center-align' > Mexican Food Lovers</h5>
                <p className='nav-shadow orange-text text-darken-5'>The Biggest Mexican Food Lovers Comunity.</p>
            </Footer>
        )
    }
}

export default FooterC;