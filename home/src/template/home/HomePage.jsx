import { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './css/HomePage.css';
import Home from '../../components/home/Home';
import MeteorRainAnimation from '../../components/animations/rainMetor/MeteorRainAnimation';

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Navbar/>
        <Home/>
        <MeteorRainAnimation/>
      </div>
    )
  }
}
