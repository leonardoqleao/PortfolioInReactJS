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
                activeIcon: 'open',
                options: 'navbar-options',
                navbar: 'navbarAnimation'
            }
        }
    }
    onClickmobileResponsive = () => {
        if (this.state.mobileResponsive.activeIcon === 'open') {
            this.setState({
                mobileResponsive: {
                    activeIcon: '',
                    options: 'mobile-navbar-options',
                    navbar: 'navbarAnimationClose'
                }
            })
        } else {
            this.setState({
                mobileResponsive: {
                    activeIcon: 'open',
                    options: 'navbar-options',
                    navbar: 'navbarAnimation'
                }
            })
        }
    }
    render() {
        const { options } = this.state.mobileResponsive
        const { navbar } = this.state.mobileResponsive
        const { activeIcon } = this.state.mobileResponsive
        return (
            <nav id={navbar} >
                <div onClick={this.onClickmobileResponsive}  class="icon">
                    <div class={"navicon " + activeIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <NavbarOptions options={options} />
            </nav>
        )
    }
}
