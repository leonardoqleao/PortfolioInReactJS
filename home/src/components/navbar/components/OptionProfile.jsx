import { Component } from "react";

export default class OptionProfile extends Component {
    render() {
        const {options, profile} = this.props
        return (
            <li id={profile} className={options}>
                <a href="#profile">Profile</a>
            </li>
        )
    }
}