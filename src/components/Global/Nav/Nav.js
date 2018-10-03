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
				<nav fixed= 'bool'>
					<Row className='valign-wrapper'>
            <SideNav
            trigger={<img className = 'photo-nav valign-wrapper' src={ photo }/>}
            options={{ closeOnClick: true }}
            >
              <div className = 'background'>
                <SideNavItem>
                  <img src={photo} className = 'photo-user ' alt= {title} />
                </SideNavItem>
                <SideNavItem className = 'user-name'> 
                <h5 className = 'lime-text text-lighten-5 brown-nav-text'>{title}</h5>
                </SideNavItem>
                <SideNavItem > <h6 className = 'lime-text text-lighten-5 brown-nav-text'>{email}</h6> </SideNavItem>
              </div>

              <SideNavItem divider />
              <SideNavItem subheader> One Food Lover </SideNavItem>
              <SideNavItem subheader> 
                <a class="col s12 waves-effect waves-light btn red lighten-2" onClick={this.handleLogouth}> <Link className = 'lime-text text-lighten-5 brown-nav-text' to = '/'>Salir</Link> </a>
              </SideNavItem>
            </SideNav>
            <h5 className = 'welcome-text'> Bienvenidx {title} </h5>
            <a className='exit' onClick={this.handleLogouth}>
              <Link to = '/'>Salir</Link>
            </a>
            <img src={Logo} className="logo" alt="logo" />

					</Row>
				</nav>

			</header>
		)
	}
}

export default Nav;
