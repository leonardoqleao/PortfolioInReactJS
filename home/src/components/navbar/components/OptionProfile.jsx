import { Component } from "react";

export default class OptionProfile extends Component {
    render() {
        const { options } = this.props
        return (
            <li id='animationInProfileOption' className={options}>
                <a href="#profile">Profile</a>
            </li>
        )
    }
}