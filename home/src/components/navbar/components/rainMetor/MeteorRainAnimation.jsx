import { Component } from "react"
import { rainMeteorFactory } from "./func/meteorRain.js";
import './css/rain-animation.css'

export default class MeteorRainAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: 200,
            rainMeteorNumber: [],
            className: [
                'colorMetor-1',
                'colorMetor-2',
                'colorMetor-3',
                'colorMetor-4',
                'colorMetor-5',
                'colorMetor-6',
            ]
        }
    }
    componentDidMount() {
        const test = rainMeteorFactory(this.state.numbers, this.state.className)
        this.setState({
            rainMeteorNumber: test
        })
    }

    render() {
        return (
            <div className="rain">
                <div id="rain">
                    {this.state.rainMeteorNumber.map(n => (
                        <div className={"deafMeteor " + n.class} style={{ left: n.left, top: n.top, display: 'inline-block' }}></div>
                    ))}
                </div>
            </div>
        )
    }
}