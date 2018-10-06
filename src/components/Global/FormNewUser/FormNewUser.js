import React, { Component } from 'react';
import {Button, Modal, Row, Icon, Input } from 'react-materialize'; // importamos elementos de Materialize

import './FormNewUser.css'; // Importamos estilos
import iconNewUser from '../../assets/icons-button-user.png';



class FormNewUser extends Component {
  // constructor(props){
	// 	super(props)
	// }
	// onChange = (e) =>{    
	// 	this.props.onTextChange(e.target.value)
	// }
	// onSubmit =(e) => {
	// 	e.preventDefault();
	// 	this.props.onSubmit();
	// }
  render() {
    return (
      <Modal
        header='Registro de nuevo usuario'
        fixedFooter
        trigger={
          <img src={iconNewUser} alt='NewUser' height='60' width='60'></img>
        }>
          <Row>
            <Input s={6} label='Nombre' validate><Icon>account_circle</Icon></Input>
            <Input s={6} label="Email" validate ><Icon>mail</Icon></Input>
            <Input type="password" s={6} label='Contraseña' validate ><Icon>lock</Icon></Input>
            <Input type="file" label="File" s={12} />
          </Row>
      </Modal>
    );
  }
}

export default FormNewUser;