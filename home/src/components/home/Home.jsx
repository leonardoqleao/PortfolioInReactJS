import { Component } from "react";
import React from 'react';
import { rainMeteorFactory } from "./components/func/meteorRain.js";
import './css/home.css';
import './css/keyframe.css';
import './css/name-animation.css';
import './css/rain-animation.css';
import ApresentationName from "./components/apresentationName.jsx";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latter: 'bom',
            time: 3600,
            numbers: 100,
            rainMeteorNumber: []
        }
    }
    metorAlt = (e) => {
        if (e.target.value <= 500) {
            this.setState({
                numbers: e.target.value
            })
            setTimeout(() => {
                const test = rainMeteorFactory(this.state.numbers)
                this.setState({
                    rainMeteorNumber: test
                })
            }, 300)
        } else {
            alert(`Value: ${e.target.value}, is invalid for animation: max value is: 500`)
            e.target.value = 500
        }
    }
    componentDidMount() {
        const test = rainMeteorFactory(this.state.numbers)
        this.setState({
            rainMeteorNumber: test
        })
        setTimeout(() => {
            this.setState({ latter: 'test' })
        }, 3600)
    }
    render() {

        return (
            <div className="home">
                <ApresentationName/>
                <div id="rain" >
                    {this.state.rainMeteorNumber.map(n => (
                        <div className={n.class} style={{ left: n.left, top: n.top, display: 'inline-block' }} ></div>
                    ))}
                </div>
                <form action="">
                    <input type="range" min="0" max="500" value={this.state.numbers} onChange={this.metorAlt} />
                </form>

            </div>
        )
    }
}