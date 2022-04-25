import { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'navbarIconActive'
    }
  }
  onClickIcon = () => {
    if (this.state.icon === '') {
      this.setState({icon: 'navbarIconActive'})
    } else {
      this.setState({icon: ''})
    }
  }
  render() {
    return (
      <div className="Home">
        <Navbar icon={this.state.icon} onClickIcon={this.onClickIcon} />
      </div>
    )
  }
}

export default Home;