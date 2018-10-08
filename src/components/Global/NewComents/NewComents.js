import React, { Component } from 'react';
import './NewComents.css'; // Importamos estilos
import { Row, Col, Button } from 'react-materialize'; // importamos elementos de Materialize



class NewComent extends Component {
  constructor(props){
		super(props)
	}
	onChange = (e) =>{    
		this.props.onTextChange(e.target.value)
	}
	onSubmit =(e) => {
		e.preventDefault();
		this.props.onSubmit();
	}
  render() {
    return (
      <div className= 'row inputComent center-align'>
        <form className='col s12 l8 offset-l4' onSubmit={this.onSubmit}>
          <div className="input-field col s10 m6 offset-m2">
            <textarea id="textarea1"
                    className="materialize-textarea" 
                    value={this.props.newComent} 
                    onChange={this.onChange}>
            </textarea>
            <label for="textarea1">Escribe un Comentario</label>
          </div>
          <Button type='submit' waves='light' className= 'margin-button   teal darken-1 col s2 l1'> <i class="material-icons">publish</i></Button>

            {/* <input classname = 'col m5' placeholder= 'Escribe un Comentario' value={this.props.newComent} onChange={this.onChange}/> */}
        </form>
      </div>
    );
  }
}

export default NewComent;