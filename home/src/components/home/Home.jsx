import { Component } from "react";
import './css/home.css';
import './css/keyframe.css';
import './css/name-animation.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latter: 'bom',
            test: 'opacity: 1;'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ latter: 'test' })
        }, 4200)
    }
    mouseOver = (e) => {
        e.target.className = this.state.latter
        setTimeout(()=>{
            e.target.className = ''
        }, 1500)
    }
    render() {

        return (
            <div>
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
                        <div onMouseOver={this.mouseOver} className='bom'>w</div>
                        <div onMouseOver={this.mouseOver} className='bom'>e</div>
                        <div onMouseOver={this.mouseOver} className='bom'>b</div>
                        <div className="displayNone">-</div>
                        <div onMouseOver={this.mouseOver} className='bom'>d</div>
                        <div onMouseOver={this.mouseOver} className='bom'>e</div>
                        <div onMouseOver={this.mouseOver} className='bom'>v</div>
                        <div onMouseOver={this.mouseOver} className='bom'>e</div>
                        <div onMouseOver={this.mouseOver} className='bom'>l</div>
                        <div onMouseOver={this.mouseOver} className='bom'>p</div>
                        <div onMouseOver={this.mouseOver} className='bom'>e</div>
                        <div onMouseOver={this.mouseOver} className='bom'>r</div>
                    </h1>
                </div>
            </div>
        )
    }
}