import { Component } from 'react';
import Navbar from './contents/navbar/Navbar';
import Home from './contents/home/Home';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/HomePage.css';
import './css/index.css';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      ViewPage: Home 
    }
  }
  render() {
    const {ViewPage} = this.state
    return (
      <div className="HomePage">
        <Navbar />
        <ViewPage />
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