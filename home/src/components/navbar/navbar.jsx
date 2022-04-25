import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';
import './css/navbar.css';
import './css/navbar-animation.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav id='navbarAnimation' className='navbar'>
                <NavbarOptions/>
            </nav>
        )
    }
}