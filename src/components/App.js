// Componente principal, renderea los componentes segun la vista

// Dependencias
import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

import FooterC from './Global/Footer/Footer'; // Importamos comp Footer
import Content from './Global/Content/content'; // Importamos componente NewComent
import './App.css'; // styles de toda la pagina

class App extends Component {

	static PropTypes = {
			children: PropTypes.object.isRequired
	};

	render() {
		const { children } = this.props;
		return (
			<div>
				<Content body={ children } />
				<FooterC />
			</div>
		);
	}
}

export default App;