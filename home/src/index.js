import { Component } from 'react';
import Navbar from './contents/navbar/Navbar';
import Home from './contents/home/Home';
import Profile from './contents/profile/Profile';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/HomePage.css';
import './css/index.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ViewPage: Profile
    }
  }
  changeView = (id) => {
    switch (id) {
      case 'Home':
        this.setState({ ViewPage: Home });
        break;
      case 'Profile':
        this.setState({ ViewPage: Profile });
        break;
      default:
    }
  }
  render() {
    const { ViewPage } = this.state
    return (
      <div className="HomePage">
        <Navbar changeView={this.changeView} />
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