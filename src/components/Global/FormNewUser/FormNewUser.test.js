import React from 'react';
import ReactDOM from 'react-dom';
import FormNewUser from './FormNewUser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormNewUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});
