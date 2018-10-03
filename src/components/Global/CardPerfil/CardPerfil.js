// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';



// import { Card, CardTitle, Row } from 'react-materialize'; // importamos elementos de Materialize

import './CardPerfil.css'; // Importamos estilos

class CardPerfil extends Component {
  static PropTypes = {
    title: PropTypes.string,
    photo: PropTypes.string,
    email: PropTypes.string,
	}
  render() {
    const {
			title,
			photo,
      // items,
      email,
		} = this.props;
    return(
      <SideNav
      trigger={<a><i class="large material-icons">dehaze</i></a>}
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
        <SideNavItem subheader className='exit-nav'> 
          <a class="col s12 waves-effect waves-light btn red lighten-2" onClick={this.handleLogouth}> <Link className = 'lime-text text-lighten-5 brown-nav-text' to = '/'>Salir</Link> </a>
        </SideNavItem>
      </SideNav>
    );
  }
}

export default CardPerfil