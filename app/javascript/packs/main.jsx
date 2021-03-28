import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <h1>{window.location.pathname}</h1>,
    document.querySelector('#root'),
  );
});
