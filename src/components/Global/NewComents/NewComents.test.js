import React from 'react';
import ReactDOM from 'react-dom';
import Coments from './NewComents';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Coments />, div);
  ReactDOM.unmountComponentAtNode(div);
});
