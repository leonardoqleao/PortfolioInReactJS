import { Component } from "react";
import meteorImag from '../../../imgs/Meteor.png';

export default class ControlMeteor extends Component {
    onClickMetorChange = () => {

    }
    
    render() {
        const { iconMeteor } = this.props
        const { displayiconMeteor } = this.props
        return (
            <div className="controlMeteor">
                <div onClick={this.onClickMetorChange} style={{ display: displayiconMeteor }} className={iconMeteor}>
                    <img src={meteorImag} alt="" srcset="" />
                </div>
                
            </div>
        )
    }
}