import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';
import './css/navbar.css';
import './css/navbar-animation.css';
import './css/navbar-icon.css';

export default class Navbar extends Component {
    render() {
        const { onClickIcon } = this.props
        const { icon } = this.props
        return (
            <nav id='navbarAnimation' className='navbar'>
                <div onClick={onClickIcon} class="icon">
                    <div class={"navbarIcon " + icon}><span></span></div>
                </div>
                <NavbarOptions />
            </nav>
        )
    }
}
