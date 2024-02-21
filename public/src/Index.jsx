// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have this file for styling
import main from './main'; // Adjust the path if necessary

ReactDOM.render(
  <React.StrictMode>
    <main />
  </React.StrictMode>,
  document.getElementById('root')
);
