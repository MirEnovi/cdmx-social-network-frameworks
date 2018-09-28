// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'
// import firebase from 'firebase'; // Importamos Firebase
// import firebaseInit from '../../../config/firebaseCredentials'; // Importamos Firebase

import { Card, CardTitle, Row } from 'react-materialize'; // importamos elementos de Materialize

import './CardPerfil.css'; // Importamos estilos

class CardPerfil extends Component {
  render() {
    return(
      <Row>
        <Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
            title="Card Title"
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
            <p><a href="#">This is a link</a></p>
        </Card>
      </Row>
    );
  }
}

export default CardPerfil