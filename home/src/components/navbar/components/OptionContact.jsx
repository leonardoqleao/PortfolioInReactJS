import { Component } from "react";

export default class OptionContact extends Component {
    render() {
        const {options, contact} = this.props
        return (
            <li id={contact} className={options}>
                <a href="Contact">Contact</a>
            </li>
        )
    }
}