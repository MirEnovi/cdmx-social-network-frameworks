import React, { Component } from 'react';
import './NewComents.css'; // Importamos estilos
import { Row, Col, Button } from 'react-materialize'; // importamos elementos de Materialize


import firebase from 'firebase'; // Importamos Firebase
// import firebaseInit from '../../config/firebaseCredentials'; // Importamos Firebase
// import db from '../../../config/firebaseCredentials'; // Importamos Firebase


class NewComent extends Component {

  render() {
    return (
      <Row className= 'inputComent center-align'>
          <Col offset='s2' s={8}>
            <form onSubmit={this.onSubmit}>
              <input placeholder= 'Escribe un Comentario' value={this.props.nameTask} onChange={this.onChange}/>
              <Button type='submit' waves='light' className= 'green lighten-2'> Nuevo Comentario </Button>
            </form>
          </Col>
      </Row>
      // <div className="new-coments">
      //   <Row className= 'flow-text'>
      //     <h4>
      //       este es un cometario
      //     </h4>
      //   </Row>   
      // </div>
    );
  }
}

export default NewComent;