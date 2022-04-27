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
            this.setState({ latter: 'test2' })
        }, 3500)
    }
    mouseOver = (e) => {
        e.target.className = this.state.latter
        setTimeout(() =>{
            e.target.className = ''
        }, 1500)
        
    }
    selec =(e)=>{
        e.target.style.display = 'none'
    }
    render() {

        return (
            <div>
                <div className="name">
                    <h1 className="blockName">
                        <div onMouseOver={this.mouseOver} className={this.state.latter} onClick={this.selec}>H</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>i</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>,</div>
                        <div className="displayNone">-</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>I</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>'</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>m</div><br />
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>L</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>e</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>o</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>n</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>a</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>r</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>d</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>o</div><br />
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>w</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>e</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>b</div>
                        <div className="displayNone">-</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>d</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>e</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>v</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>e</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>l</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>p</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>e</div>
                        <div onMouseOver={this.mouseOver} className={this.state.latter}>r</div>
                    </h1>
                </div>
            </div>
        )
    }
}