import { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Router } from "@reach/router"
import './css/HomePage.css';
import Home from '../../components/home/Home';

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Navbar />
        <Router>
        <Home path='/'/>

        </Router>
      </div>
    )
  }
}
