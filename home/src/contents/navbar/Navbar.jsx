import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';
import MeteorRainAnimation from './components/rainMetor/MeteorRainAnimation';
import meteorImag from '../../imgs/Meteor.png';
import meteorImagOff from '../../imgs/MeteorOff.png';
import meteorImagOffBlack from '../../imgs/MeteorOffBlack.png';
import github from '../../imgs/github.png';
import githubBlack from '../../imgs/githubBlack.png';
import gmail from '../../imgs/gmail.png';
import gmailBlack from '../../imgs/gmailBlack.png';
import linkedin from '../../imgs/linkedin.png';
import linkedinBlack from '../../imgs/linkedinBlack.png';
import telegram from '../../imgs/telegram.png';
import telegramBlack from '../../imgs/telegramBlack.png';
import Social from './components/Social';
import './css';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileResponsive: {
                activeIcon: '',
                options: 'mobile-navbar-options',
                navbar: 'navbarClose',
                icon: 'closeIcon',
                iconMeteor: 'imgMeteorClose'
            },
            displayiconMeteor: '',
            meteor: '',
            icon: meteorImag,
            social: {
                github: githubBlack,
                gmail: gmailBlack,
                linkedin: linkedinBlack,
                telegram: telegramBlack,
                class: 'socialClose'
            }
        }
    }
    onClickmobileResponsive = () => {
        setTimeout(() => {
            this.setState({ displayiconMeteor: '' })
        }, 2000);
        if (this.state.mobileResponsive.activeIcon === 'open') {
            this.setState({
                mobileResponsive: {
                    activeIcon: '',
                    options: 'mobile-navbar-options',
                    navbar: 'navbarAnimationClose',
                    icon: 'closeIcon',
                    iconMeteor: 'imgMeteorClose'
                },
                displayiconMeteor: 'none',
                social: {
                    github: githubBlack,
                    gmail: gmailBlack,
                    linkedin: linkedinBlack,
                    telegram: telegramBlack,
                    class: 'socialClose'  
                }
            })
            if (this.state.icon === meteorImagOff) { this.setState({ icon: meteorImagOffBlack }) }
        } else {
            this.setState({
                mobileResponsive: {
                    activeIcon: 'open',
                    options: 'navbar-options',
                    navbar: 'navbarAnimation',
                    icon: 'icon',
                    iconMeteor: 'imgMeteorClose'
                },
                displayiconMeteor: 'none',
                social: {
                    github: github,
                    gmail: gmail,
                    linkedin: linkedin,
                    telegram: telegram,
                    class: 'social'
                }
            })
            if (this.state.icon === meteorImagOffBlack) { this.setState({ icon: meteorImagOff }) }  
        }
    }
    meteorOnOff = () => {
        if (this.state.meteor === '') {
            if (this.state.mobileResponsive.activeIcon === '') {
                this.setState({ meteor: 'none', icon: meteorImagOffBlack })
            } else {

                this.setState({ meteor: 'none', icon: meteorImagOff })
            }
        } else {
            this.setState({ meteor: '', icon: meteorImag })
        }
    }
    render() {
        const { activeIcon, options, navbar, icon, iconMeteor } = this.state.mobileResponsive
        return (
            <>
                <nav className='navbarSelection' id={navbar} >
                    <div class={icon}>
                        <div onClick={this.onClickmobileResponsive} class={"navicon " + activeIcon}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="controlMeteor">
                            <div onClick={this.meteorOnOff} style={{ display: this.state.displayiconMeteor }} className={iconMeteor}>
                                <img src={this.state.icon} alt="meteorImg" />
                            </div>
                        </div>
                    </div>
                    <NavbarOptions onclickt={this.onClickmobileResponsive} options={options} />
                    <Social social={this.state.social} display={this.state.displayiconMeteor} />
                </nav>
                <MeteorRainAnimation display={this.state.meteor} />
            </>
        )
    }
}
