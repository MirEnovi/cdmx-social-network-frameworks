import React, {	Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import firebase from 'firebase'; // Importamos Firebase
import firebaseInit from '../../../config/firebaseCredentials'; // Importamos Firebase


import './Nav.css'; // Importamos estilos

import {
	Navbar,
	NavItem,
	Row
} from 'react-materialize'; // importamos elementos de Materialize

class Nav extends Component {
	static PropTypes = {
		title: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired
	}
//	Función de logouth
	handleLogouth() {
	  firebase.auth().signOut().then(() => console.log('Desconectado'))
	  .catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
	}

	render() {
		const {
			title,
			items
		} = this.props;

		return (
			<header className='Nav'>
				<Row>
					<Navbar right className= 'orange lighten-3' >
						<NavItem>
						<h5 className='red-text'> {title} </h5>
						</NavItem>
						
						{items && items.map((item,key) => {
							return <NavItem key={key}> <span className='green-text'> <Link to = {item.url}>{item.title}</Link> </span></NavItem>
						})}
						<NavItem onClick={this.handleLogouth}>
							<span className='green-text'> <Link to = '/'> Salir</Link></span>
						</NavItem>
					</Navbar>
				</Row>
			</header>
		)
	}
}

export default Nav;
