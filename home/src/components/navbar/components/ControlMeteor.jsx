import { Component } from "react";
import { rainMeteorFactory } from "../../animations/rainMetor/func/meteorRain";
import meteorImag from '../../../imgs/Meteor.png';

export default class ControlMeteor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numbers: 0
        }
    }
    onClickMetorChange = () => {

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
        const { iconMeteor } = this.props
        const { displayiconMeteor } = this.props
        return (
            <div className="controlMeteor">
                <div onClick={this.onClickMetorChange} style={{ display: displayiconMeteor }} className={iconMeteor}>
                    <img src={meteorImag} alt="" srcset="" />
                </div>
                <div className="dropDownControler">
                    <form action="">
                        <input type="range" min="0" max="500" value={this.state.numbers} onChange={this.metorAlt} />
                    </form>
                </div>
            </div>
        )
    }
}