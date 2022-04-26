import { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './css/HomePage.css';
import Home from '../../components/home/Home';

export default class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar/>
        <Home/>
      </div>
    )
  }
}
