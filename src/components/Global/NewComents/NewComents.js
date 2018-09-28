import React, { Component } from 'react';
import './NewComents.css'; // Importamos estilos
import { Row } from 'react-materialize'; // importamos elementos de Materialize


// import firebaseInit from '../../config/firebaseCredentials'; // Importamos Firebase


class NewComent extends Component {

  render() {
    return (
      <div className="new-coments">
        <Row className= 'flow-text'>
          <h4>
            este es un cometario
          </h4>
        </Row>   
      </div>
    );
  }
}

export default NewComent;