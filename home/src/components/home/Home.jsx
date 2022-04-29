import { Component } from "react";
import './css/home.css';
import './css/keyframe.css';
import './css/name-animation.css';
import './css/rain-animation.css';
import ApresentationName from "./components/apresentationName.jsx";
import MetorRainAnimation from "./components/MetorRainAnimation";


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <ApresentationName/>
                <MetorRainAnimation/>
            </div>
        )
    }
}