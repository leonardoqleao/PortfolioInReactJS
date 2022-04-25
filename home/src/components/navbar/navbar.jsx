import { Component } from 'react';
import './css/navbar.css'

class Navbar extends Component {


    render() {
        return (
            <nav className='navbar'>
                <ul className='navbarUl1'>
                    <li>
                        <a href="#home">Home</a>

                    </li>
                    <li>
                        <a href="#profile">Profile</a>
                    </li>
                    <li>
                        <a href="#projects">projects</a>
                        <ul className='navbarUl2'>
                            <li>
                                <a href="#project-1">Project-1</a>
                            </li>
                            <li>
                                <a href="#project-2">Project-2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="Contact">Contact</a>
                    </li>
                    <li>
                        <a href="#links">Links</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar