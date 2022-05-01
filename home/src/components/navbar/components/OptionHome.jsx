import { Component } from "react"
import { Link } from "@reach/router"

export default class OptionHome extends Component {
    render() {
        const { options } = this.props
        return (
            <li id='animationInHomeOption' className={options}>
                <Link to="/">Home</Link>
            </li>
        )
    }
}