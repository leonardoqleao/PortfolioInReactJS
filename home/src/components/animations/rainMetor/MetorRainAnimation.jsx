import { Component } from "react"
import { rainMeteorFactory } from "./func/meteorRain.js";

export default class MetorRainAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: 100,
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
    metorAlt = (e) => {
        if (e.target.value <= 500) {
            this.setState({
                numbers: e.target.value
            })
            setTimeout(() => {
                const test = rainMeteorFactory(this.state.numbers, this.state.className)
                this.setState({
                    rainMeteorNumber: test
                })
            }, 300)
        } else {
            alert(`Value: ${e.target.value}, is invalid for animation: max value is: 500`)
            e.target.value = 500
        }
    }

    render() {
        return (
            <div className="rain">
                <div id="rain">
                    {this.state.rainMeteorNumber.map(n => (
                        <div className={"deafMetor " + n.class} style={{ left: n.left, top: n.top, display: 'inline-block' }}></div>
                    ))}
                </div>
                <form action="">
                    <input type="range" min="0" max="500" value={this.state.numbers} onChange={this.metorAlt} />
                </form>
            </div>
        )
    }
}