import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';

import './css/navbar.css';
import './css/navbar-animation.css';
import './css/navbar-icon.css';
import './css/navbar-responsive-mobile.css';
import './css/navbar-meteorIcon.css';
import ControlMeteor from './components/ControlMeteor';
import MeteorRainAnimation from './components/rainMetor/MeteorRainAnimation';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileResponsive: {
                activeIcon: '',
                options: 'mobile-navbar-options',
                navbar: 'navbarClose',
                icon: 'closeIcon',
                iconMeteor: 'imgMeteorClose'
            },
            displayiconMeteor: ''

        }
    }
    onClickmobileResponsive = () => {
        setTimeout(() => {
            this.setState({ displayiconMeteor: '' })
        }, 2000);
        if (this.state.mobileResponsive.activeIcon === 'open') {
            this.setState({
                mobileResponsive: {
                    activeIcon: '',
                    options: 'mobile-navbar-options',
                    navbar: 'navbarAnimationClose',
                    icon: 'closeIcon',
                    iconMeteor: 'imgMeteorClose'
                },
                displayiconMeteor: 'none'
            })
        } else {
            this.setState({
                mobileResponsive: {
                    activeIcon: 'open',
                    options: 'navbar-options',
                    navbar: 'navbarAnimation',
                    icon: 'icon',
                    iconMeteor: 'imgMeteorClose'
                },
                displayiconMeteor: 'none'
            })
        }
    }


    render() {
        const { activeIcon, options, navbar, icon, iconMeteor } = this.state.mobileResponsive
        return (
            <>
                <nav className='navbarSelection' id={navbar} >
                    <div class={icon}>
                        <div onClick={this.onClickmobileResponsive} class={"navicon " + activeIcon}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ControlMeteor
                            iconMeteor={iconMeteor}
                            displayiconMeteor={this.state.displayiconMeteor}
                        />
                    </div>

                    <NavbarOptions options={options} />
                </nav>
                <MeteorRainAnimation />
            </>
        )
    }
}
