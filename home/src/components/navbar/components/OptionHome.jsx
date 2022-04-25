import { Component } from "react"

export default class OptionHome extends Component {
    render() {
        const {options} = this.props
        return (
            <li id='animationInHomeOption' className={options}>
                <a href="#home">Home</a>
            </li>
        )
    }
}