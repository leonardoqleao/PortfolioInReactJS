import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import './css/home.css';
import './css/keyframe.css';
import './css/name-animation.css';
import ApresentationName from "./components/ApresentationName.jsx";
import './css/mobile-resposive.css'


export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <ApresentationName/>

                <ReactTypingEffect
                className="typingeffect" 
                staticText={['Full Stack Developer:']}
                cursor={' '}/>

                <ReactTypingEffect
                className="typingeffect" 
                text={[
                    'ReactJS',
                    'NodeJS',
                    'TypeScript',
                    'TDD',
                    'GCP',
                    'MySQL',
                ]}
                speed={50}
                eraseSpeed={50}
                eraseDelay={1000}
                typingDelay={1000}
                cursor={' '}/>

            </div>
        )
    }
}