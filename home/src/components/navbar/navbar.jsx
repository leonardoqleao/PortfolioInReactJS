import { Component } from 'react';
import './css/navbar.css';
import './css/navbar-animation.css'

class Navbar extends Component {


    render() {
        return (
            <nav className='navbar'>
                <ul className='navbarUl1'>
                    <li id='animationInHomeOption' className='navbar-options'>
                        <a href="#home">Home</a>

                    </li>
                    <li id='animationInProfileOption' className='navbar-options'>
                        <a href="#profile">Profile</a>
                    </li>
                    <li id='animationInProjectsOption' className='navbar-options'>
                        <a href="#projects">Projects</a>
                        <ul className='navbarUl2'>
                            <li className='navbar-options'>
                                <a href="#project-1">Project-1</a>
                            </li>
                            <li className='navbar-options'>
                                <a href="#project-2">Project-2</a>
                            </li>
                        </ul>
                    </li>
                    <li id='animationInContactOption' className='navbar-options'>
                        <a href="Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar