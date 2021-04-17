import React from 'react';
import ReactDOM from 'react-dom';
import App from '@root/app';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root'),
  );
});
