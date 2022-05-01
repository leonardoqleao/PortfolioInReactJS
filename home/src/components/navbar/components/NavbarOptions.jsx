import { Component } from "react";
import { Link } from "@reach/router"

export default class NavbarOptions extends Component {
    render() {
        const { options } = this.props

        return (
            <ul className='navbarUl1'>
                <li id='animationInHomeOption' className={options}>
                    <Link to="/">Home</Link>
                </li>
                <li id='animationInProfileOption' className={options}>
                    <a href="#profile">Profile</a>
                </li>
                <li id='animationInProjectsOption' className={options}>
                    <a href="#projects">Projects</a>
                </li>
                <li id='animationInContactOption' className={options}>
                    <a href="Contact">Contact</a>
                </li>
            </ul>
        )
    }
}