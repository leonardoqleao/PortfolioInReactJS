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
                'colorMeteor-1',
                'colorMeteor-2',
                'colorMeteor-3',
            ]
        }
    }
    componentDidMount() {
        const RenderMetor = rainMeteorFactory(this.state.numbers, this.state.className)
        this.setState({
            rainMeteorNumber: RenderMetor
        })
    }

    render() {
        const {display} = this.props
        return (
            <div style={{display: display}} className="rain">
                <div id="rain">
                    {this.state.rainMeteorNumber.map(n => (
                        <div className={"deafMeteor " + n.class} style={{ left: n.left, top: n.top, display: 'inline-block' }}></div>
                    ))}
                </div>
            </div>
        )
    }
}