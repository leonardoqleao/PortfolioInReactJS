import { Component } from "react";

export default class OptionProjects extends Component {
    render() {
        const {options} = this.props
        return (
            <li id='animationInProjectsOption' className={options}>
                <a href="#projects">Projects</a>
            </li>
        )
    }
}