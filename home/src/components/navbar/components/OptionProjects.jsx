import { Component } from "react";

export default class OptionProjects extends Component {
    render() {
        return (
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
        )
    }
}