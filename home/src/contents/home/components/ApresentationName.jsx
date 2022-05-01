import { Component } from "react";

export default class ApresentationName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latter: 'incialNameAnimation',
            time: 3600
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({ latter: 'nameAnimation' })
        }, 3600)
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
            <div className="name">
                <h1 className="blockName">
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>H</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>i</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>,</div>
                    <div className="displayNone">-</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>I</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>'</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>m</div><br />
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>L</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>e</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>o</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>n</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>a</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>r</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>d</div>
                    <div onMouseOver={this.mouseOver} className='incialNameAnimation'>o</div><br />
                </h1>
            </div>
        )
    }
}