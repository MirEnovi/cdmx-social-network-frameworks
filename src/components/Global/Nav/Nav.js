import React, {	Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import firebase from 'firebase'; // Importamos Firebase
// import Firebase from '../../../config/firebaseCredentials'



import './Nav.css'; // Importamos estilos
import Logo from '../../assets/taco.png'

import { Row, SideNav, SideNavItem } from 'react-materialize'; // importamos elementos de Materialize
// import Button from 'react-materialize/lib/Button';

class Nav extends Component {
	static PropTypes = {
		title: PropTypes.string.isRequired,
    photo: PropTypes.string,
    email: PropTypes.string,
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
      email,
		} = this.props;

		return (
			<header className='Nav'>
				<nav>
					<Row className='valign-wrapper'>
            <SideNav
            trigger={<a><i class="large material-icons col l1 offset-l1">dehaze</i></a>}
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
              <div className = 'exit-nav'>
                <a class="offset-s2 col s8 waves-effect waves-light btn red lighten-2 " onClick={this.handleLogouth}> <Link className = 'lime-text text-lighten-5 brown-nav-text' to = '/'>Salir</Link> </a>
              </div>

            </SideNav>

            <img src={Logo} className="logo left-align valign-wrapper margin" alt="logo" />

            <div className ='right-align offset-m5 col m5 valign-wrapper'>
              <img className = 'photo-nav col-m1 margin' src={ photo } alt= {title} />
              <h5 className = 'name-text col-m3 margin truncate'> {title} </h5>
              <a className='exit col-m1 margin pulse' onClick={this.handleLogouth}>
                  <Link to = '/'>Salir</Link>
              </a>
            </div>
					</Row>
				</nav>

			</header>
		)
	}
}

export default Nav;
