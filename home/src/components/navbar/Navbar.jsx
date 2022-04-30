import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';
import meteorImag from '../../imgs/Meteor.png';
import './css/navbar.css';
import './css/navbar-animation.css';
import './css/navbar-icon.css';
import './css/navbar-responsive-mobile.css';
import './css/navbar-meteorIcon.css';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileResponsive: {
                activeIcon: '',
                options: 'mobile-navbar-options',
                navbar: 'navbarClose',
                icon: 'closeIcon'
            }
        }
    }
    onClickmobileResponsive = () => {
        if (this.state.mobileResponsive.activeIcon === 'open') {
            this.setState({
                mobileResponsive: {
                    activeIcon: '',
                    options: 'mobile-navbar-options',
                    navbar: 'navbarAnimationClose',
                    icon: 'closeIcon'
                }
            })
        } else {
            this.setState({
                mobileResponsive: {
                    activeIcon: 'open',
                    options: 'navbar-options',
                    navbar: 'navbarAnimation',
                    icon: 'icon'
                }
            })
        }
    }
    render() {
        const { activeIcon, options, navbar, icon } = this.state.mobileResponsive
        return (
            <nav id={navbar} >
                <div class={icon}>
                    <div onClick={this.onClickmobileResponsive} class={"navicon " + activeIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className='imgMeteor'>
                        <img src={meteorImag} alt="" srcset="" />
                    </div>
                </div>

                <NavbarOptions options={options} />
            </nav>
        )
    }
}
