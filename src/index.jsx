import React from 'react';
import ReactDOM from 'react-dom';

// A simple example of a functional component
const Hello = props => <h1>Hello, {props.name}</h1>;

// render an instance of the component in the DOM
ReactDOM.render(<Hello name="Boris" />, document.querySelector('.container'));
