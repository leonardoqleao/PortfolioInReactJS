import { Component } from "react";

export default class OptionContact extends Component {
    render() {
        const {options} = this.props
        return (
            <li id='animationInContactOption' className={options}>
                <a href="Contact">Contact</a>
            </li>
        )
    }
}