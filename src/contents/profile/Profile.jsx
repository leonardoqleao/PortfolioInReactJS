import { Component } from "react";
import { LineBetween, RightSide, LeftSide } from "./components";
import './css';

export default class Profile extends Component {
    render() {
        return (
            <div class="Profile">
                <h1>Timeline</h1>
                <div className="timeline">
                    <LeftSide />
                    <LineBetween />
                    <RightSide />
                </div>
            </div>
        )
    }
}
