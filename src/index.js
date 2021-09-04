import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { AppClass } from './AppClass';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppClass />
  </React.StrictMode>,
  document.getElementById('root')
);
