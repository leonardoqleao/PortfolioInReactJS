import { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import './css/Home.css';

class Home extends Component {
  // constructor(props){
  //   super(props)
  // }
  // state = {}
  render() {
    return (
      <div className="Home">
        <Navbar/>
      </div>
    )
  }
}

export default Home;