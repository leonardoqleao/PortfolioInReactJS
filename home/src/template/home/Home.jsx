import { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar/>
      </div>
    )
  }
}

export default Home;