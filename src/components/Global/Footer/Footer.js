import React, { Component } from 'react';
import './Footer.css'; // Importamos estilos
import { Footer } from 'react-materialize'; // importamos elementos de Materialize

class FooterC extends Component {
    render() {
        return (
            <Footer
            moreLinks={
            <a className='orange-text text-darken-4 right' href="http://www.laboratoria.la/" >© 2018 Laboratoria Ciudad de México</a>
              }
            className='example green accent-2 orange-text text-darken-4'>
                <h5 className= '' > Mexican Food Lovers</h5>
                <p>The Biggest Mexican Food Lovers Comunity.</p>
            </Footer>
        )
    }
}

export default FooterC;