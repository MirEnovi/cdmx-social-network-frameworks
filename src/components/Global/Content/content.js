import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row } from 'react-materialize'; // importamos elementos de Materialize


class Content extends Component {
  static PropTypes = {
    body: PropTypes.object.isRequired
  };
  render() {
    const { body } = this.props;
    return (
      <div className="content">
        <Row className= 'flow-text'>
          {body}
        </Row>   
      </div>
    );
  }
}

export default Content;