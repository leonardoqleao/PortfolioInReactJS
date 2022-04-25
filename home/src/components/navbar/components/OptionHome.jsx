import { Component } from "react"

export default class OptionHome extends Component {
    render() {
        const {options, home} = this.props
        return (
            <li id={home} className={options}>
                <a href="#home">Home</a>
            </li>
        )
    }
}