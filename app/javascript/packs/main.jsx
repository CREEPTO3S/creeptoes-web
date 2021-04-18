import React from 'react';
import ReactDOM from 'react-dom';
import App from '@root/app';
import 'xp.css/dist/XP.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.querySelector('#root'),
  );
});
