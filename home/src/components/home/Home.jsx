import { Component } from "react";
import React from 'react';
import { rainMeteorFactory } from "./components/func/meteorRain.js";
import './css/home.css';
import './css/keyframe.css';
import './css/name-animation.css';
import './css/rain-animation.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latter: 'bom',
            test: 'opacity: 1;',
            time: 3600,
            numbers: 0,
            rainMeteorNumber: []
        }
    }
    metorAlt = (e) => {
        this.setState({
            numbers: e.target.value
        })
        console.log(this.state.numbers)
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
    
    componentDidUpdate() {
        
    }
    mouseOver = (e) => {
        e.target.className = this.state.latter
        setTimeout(() => {
            e.target.className = ''
            this.setState({ time: 1500 })
        }, this.state.time)
    }

    render() {

        return (
            <div className="home">
                <div className="name">
                    <h1 className="blockName">
                        <div onMouseOver={this.mouseOver} className='bom'>H</div>
                        <div onMouseOver={this.mouseOver} className='bom'>i</div>
                        <div onMouseOver={this.mouseOver} className='bom'>,</div>
                        <div className="displayNone">-</div>
                        <div onMouseOver={this.mouseOver} className='bom'>I</div>
                        <div onMouseOver={this.mouseOver} className='bom'>'</div>
                        <div onMouseOver={this.mouseOver} className='bom'>m</div><br />
                        <div onMouseOver={this.mouseOver} className='bom'>L</div>
                        <div onMouseOver={this.mouseOver} className='bom'>e</div>
                        <div onMouseOver={this.mouseOver} className='bom'>o</div>
                        <div onMouseOver={this.mouseOver} className='bom'>n</div>
                        <div onMouseOver={this.mouseOver} className='bom'>a</div>
                        <div onMouseOver={this.mouseOver} className='bom'>r</div>
                        <div onMouseOver={this.mouseOver} className='bom'>d</div>
                        <div onMouseOver={this.mouseOver} className='bom' onAnimationEnd={this.rainMeteor} >o</div><br />
                    </h1>
                </div>
                <div id="rain" >
                    {this.state.rainMeteorNumber.map(n => (
                        <div className="rainchild" style={{ left: n.left, top: n.top, }} ></div>
                    ))}
                </div>
                <form action="">
                    <input type="number" value={this.state.value} onChange={this.metorAlt} />
                    <input type="submit" />
                </form>

            </div>
        )
    }
}