import React from 'react';
import ReactDOM from 'react-dom';
import Lists from './Lists';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lists />, div);
});
