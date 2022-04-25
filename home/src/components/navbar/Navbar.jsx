import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';
import './css/navbar.css';
import './css/navbar-animation.css';
import './css/navbar-icon.css';
import './css/navbar-responsive-mobile.css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileResponsive: {
                icon: {
                    activeIcon: 'navbarIconActive',
                    icon: 'icon'
                },
                options:'navbar-options',
                navbar:'navbarAnimation'
            }
        }
    }
    onClickmobileResponsive = () => {
        if (this.state.mobileResponsive.icon.activeIcon === 'navbarIconActive') {
            this.setState({
                mobileResponsive: {
                    icon: {
                        icon: 'mobile-icon',
                        activeIcon: ''
                    },
                    options:'mobile-navbar-options',
                    navbar: 'navbarAnimationClose'
                }
            })
        } else {
            this.setState({
                mobileResponsive: {
                    icon: {
                        icon: 'icon',
                        activeIcon: 'navbarIconActive'
                    },
                    options: 'navbar-options',
                    navbar: 'navbarAnimation'
                }
            })
        }
    }
    render() {
        const { options } = this.state.mobileResponsive
        const { navbar } = this.state.mobileResponsive
        const { icon, activeIcon } = this.state.mobileResponsive.icon
        return (
            <nav id={navbar} >
                <div onClick={this.onClickmobileResponsive} class={icon}>
                    <div class={"navbarIcon " + activeIcon}><span></span></div>
                </div>
                <NavbarOptions options={options}/>
            </nav>
        )
    }
}
