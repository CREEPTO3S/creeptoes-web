import React from 'react';
import ReactDOM from 'react-dom';
import App from '@root/app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root'),
  );
});
