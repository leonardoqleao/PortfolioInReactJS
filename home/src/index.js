import { Component } from 'react';
import Navbar from './contents/navbar/Navbar';
import Home from './contents/home/Home';
import Profile from './contents/profile/Profile';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/HomePage.css';
import './css/index.css';
import './css/transitionAnimation.css'
class None extends Component {render(){return(<></>)}}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ViewPage: Profile,
      transitionView: {
        page:'',
        time: 0,
        left: 0,
        right: 0
      },
      pageSplit: [],
      transitionPage: 'none'
    }
  }
  changeView = (id) => {
    let pageSplit = id.split(' ')
    this.setState({ViewPage: None, transitionPage: '',  pageSplit: pageSplit})

    setTimeout(() => {
      switch (id) {
        case 'H O M E':
          this.setState({ ViewPage: Home });
          break;
        case 'P R O F I L E':
          this.setState({ ViewPage: Profile });
          break;
        default:
      }
      this.setState({transitionPage: 'none'})
    }, 2700);
  }
  render() {
    const { ViewPage } = this.state
    return (
      <div className="HomePage">
        <Navbar changeView={this.changeView} />
        <div style={{display: this.state.transitionPage}} className='pageTransition'>
          {this.state.pageSplit.map((pageSplit) => (
            <div className='transition'>
              {pageSplit}
            </div>
          )
          )}
          
        </div>
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