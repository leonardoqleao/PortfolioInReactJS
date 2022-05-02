import { Component } from "react"
import ReactTypingEffect from "react-typing-effect"
import ApresentationName from "./components/ApresentationName.jsx"
import './css'

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
