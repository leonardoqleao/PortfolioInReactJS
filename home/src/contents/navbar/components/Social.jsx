import { Component } from "react";

export default class Social extends Component {
    render() {
        const { social, display } = this.props
        return (
            <div className={social.class} style={{ display: display }}>
                <a href="https://github.com/leonardoqleao" target={'_blank'} rel="noreferrer">
                    <img className="socialIcon" src={social.github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/leonardoqleao" target={'_blank'} rel="noreferrer">
                    <img className="socialIcon" src={social.linkedin} alt="linkdin" />
                </a>
                <a href="mailto:leonardoq.leao@gmail.com" target={'_blank'} rel="noreferrer">
                    <img className="socialIcon" src={social.gmail}  title='leonardoq.leao@gmail.com' alt="gmail" />
                </a>
                <a href="https://t.me/LeonardoQ_Leao" target={'_blank'} rel="noreferrer">
                    <img className="socialIcon" src={social.telegram} alt="telegram" />
                </a>
            </div>
        )
    }
}