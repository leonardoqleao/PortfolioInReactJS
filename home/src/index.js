import { Component } from 'react';
import Navbar from './contents/navbar/Navbar';
import Home from './contents/home/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/HomePage.css';
import './css/index.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Navbar />
        <Home />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);