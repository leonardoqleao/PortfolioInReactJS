import { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileResponsive: {
        icon: {
          activeIcon: 'navbarIconActive',
          icon: 'icon'
        },
        options: 'navbar-options',
        navbar: 'navbar'
      }
    }
  }
  onClickmobileResponsive = () => {
    if (this.state.mobileResponsive.icon.activeIcon === 'navbarIconActive') {
      this.setState({ mobileResponsive: { icon: { icon: 'mobile-icon', activeIcon: '' }, options: 'mobile-navbar-options', navbar: 'mobile-navbar' } })
    } else {
      this.setState({ mobileResponsive: { icon: { icon: 'icon', activeIcon: 'navbarIconActive' }, options: 'navbar-options', navbar: 'navbar' } })
    }
  }
  render() {
    return (
      <div className="Home">
        <Navbar mobileResponsive={this.state.mobileResponsive} onClickmobileResponsive={this.onClickmobileResponsive} />
      </div>
    )
  }
}

export default Home;