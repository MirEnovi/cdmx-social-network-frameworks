import React, { Component } from 'react';
import './Footer.css'; // Importamos estilos
import { Footer } from 'react-materialize'; // importamos elementos de Materialize

class FooterC extends Component {
    render() {
        return (
            <Footer
            moreLinks={
            <a className='z-depth-3 brown-text text-darken-2 right' href="http://www.laboratoria.la/" > © 2018 Laboratoria Ciudad de México </a>
              }
            className='example teal lighten-1 brown-text text-darken-1'>
                <h5 className= 'center-align' > Mexican Food Lovers</h5>
                <p >The Biggest Mexican Food Lovers Comunity.</p>
            </Footer>
        )
    }
}

export default FooterC;