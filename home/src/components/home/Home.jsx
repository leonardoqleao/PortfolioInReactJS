import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import './css/home.css';
import './css/keyframe.css';
import './css/name-animation.css';
import ApresentationName from "./components/ApresentationName.jsx";


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <ApresentationName/>
                <ReactTypingEffect text={['Bom dia']}/>
            </div>
        )
    }
}