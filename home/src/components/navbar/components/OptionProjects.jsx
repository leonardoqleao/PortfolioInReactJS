import { Component } from "react";

export default class OptionProjects extends Component {
    render() {
        const {options, projects} = this.props
        return (
            <li id={projects} className={options}>
                <a href="#projects">Projects</a>
            </li>
        )
    }
}