import React, { Component } from 'react';
import './NewComents.css'; // Importamos estilos
import { Row, Col, Button } from 'react-materialize'; // importamos elementos de Materialize



class NewComent extends Component {
  constructor(props){
		super(props)
	}
	onChange = (e) =>{
    // console.log(e.target.value);    
		this.props.onInputChange(e.target.value)
	}
	onSubmit =(e) => {
		e.preventDefault();
		this.props.onSubmit();
	}
  render() {
    return (
      <Row className= 'inputComent center-align'>
          <Col offset='s2' s={8}>
            <form onSubmit={this.onSubmit}>
              <input placeholder= 'Escribe un Comentario' value={this.props.newComent} onChange={this.onChange}/>
              <Button type='submit' waves='light' className= 'green lighten-2'> Publicar </Button>
            </form>
          </Col>
      </Row>
    );
  }
}

export default NewComent;