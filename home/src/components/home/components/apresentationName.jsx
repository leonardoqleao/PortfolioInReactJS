import { Component } from "react";

export default class ApresentationName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latter: 'bom',
            time: 3600
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({ latter: 'test' })
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
                    <div onMouseOver={this.mouseOver} className='bom'>o</div><br />
                </h1>
            </div>
        )
    }
}