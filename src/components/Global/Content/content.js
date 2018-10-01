// Componente que retorna el contenido del Body.
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Content extends Component {
  static PropTypes = {
    body: PropTypes.object.isRequired
  };
  render() {
    const { body } = this.props;
    return (
      <div className="content flow-text">
        {body} 
      </div>
    );
  }
}

export default Content;