import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Globalstate from './context/globalstate';

ReactDOM.render(
  <React.StrictMode>
    <Globalstate>
      <App />
    </Globalstate>
  </React.StrictMode>,
  document.getElementById('root')
);


