import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';
import './css/navbar.css';
import './css/navbar-animation.css';
import './css/navbar-icon.css';
import './css/navbar-responsive-mobile.css'

export default class Navbar extends Component {
    render() {
        const { onClickmobileResponsive } = this.props
        const { options, navbar } = this.props.mobileResponsive
        const { icon, activeIcon } = this.props.mobileResponsive.icon
        return (
            <nav id='navbarAnimation' className={navbar}>
                <div onClick={onClickmobileResponsive} class={icon}>
                    <div class={"navbarIcon " + activeIcon}><span></span></div>
                </div>
                <NavbarOptions options={options} />
            </nav>
        )
    }
}
