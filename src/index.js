import React  from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage.jsx';
import RenderTitle from './titleChage.jsx';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <RenderTitle />
  </React.StrictMode>,
  document.getElementById('bom')
);