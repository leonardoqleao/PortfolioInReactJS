import { Component } from "react";

export default class Social extends Component{
    render (){
        const{ social, display } = this.props
        return (
            <div className={social.class} style={{display: display}}>
                <img className="socialIcon" src={social.github} alt="github" />
                <img className="socialIcon" src={social.linkedin} alt="linkdin" />
                <img className="socialIcon" src={social.gmail} alt="gmail" />
                <img className="socialIcon" src={social.telegram} alt="telegram" />
            </div>
        )
    }
}