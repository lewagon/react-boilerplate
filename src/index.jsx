import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

const Hello = props => <div>Hello, {props.name}</div>;

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
