import React, {	Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import firebase from 'firebase'; // Importamos Firebase
import firebaseInit from '../../../config/firebaseCredentials'; // Importamos Firebase


import './Nav.css'; // Importamos estilos
import Logo from '../../assets/taco.png'

import { Navbar, NavItem, Row, Col, SideNav, SideNavItem, Button } from 'react-materialize'; // importamos elementos de Materialize

class Nav extends Component {
	static PropTypes = {
		title: PropTypes.string.isRequired,
    photo: PropTypes.string,
    email: PropTypes.string,
		items: PropTypes.array
	}
//	Función de logouth
	handleLogouth = () => {
	  firebase.auth().signOut().then(() => console.log('Desconectado'))
	  .catch((error) => console.log(`Error: ${error.code}: ${error.message}`));
	}

	render() {
		const {
			title,
			photo,
      items,
      email,
		} = this.props;

		return (
			<header className='Nav'>
				<nav left fixed= 'bool'>
					<Row className='valign-wrapper'>
            <img src={Logo} className="logo" alt="logo" />	

            <SideNav
            trigger={<img className = 'photo-nav valign-wrapper' src={ photo }/>}
            options={{ closeOnClick: true }}
            >
              <SideNavItem >
                <img src={photo} className = 'photo-user' alt= {title} />
              </SideNavItem>
              <SideNavItem className = 'user-name'> {title}</SideNavItem>
              <SideNavItem > {email} </SideNavItem>

              <SideNavItem divider />
              <SideNavItem subheader> One Food Lover </SideNavItem>
            </SideNav>

              <h5 className = 'welcome-text'> Bienvenidx {title} </h5>	

            <Col sl={1} className='grid-example'>
              <Button className='brown darken-3' onClick={this.handleLogouth}>
                <Link to = '/'> Salir</Link>
              </Button>
            </Col>
					</Row>
				</nav>

			</header>
		)
	}
}

export default Nav;
