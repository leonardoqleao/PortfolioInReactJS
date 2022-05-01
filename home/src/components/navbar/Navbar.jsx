import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';
import MeteorRainAnimation from './components/rainMetor/MeteorRainAnimation';
import meteorImag from '../../imgs/Meteor.png';
import meteorImagOff from '../../imgs/MeteorOff.png';
import './css/navbar.css';
import './css/navbar-animation.css';
import './css/navbar-icon.css';
import './css/navbar-responsive-mobile.css';
import './css/navbar-meteorIcon.css';


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
            icon: meteorImag

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
                displayiconMeteor: 'none'
            })
        } else {
            this.setState({
                mobileResponsive: {
                    activeIcon: 'open',
                    options: 'navbar-options',
                    navbar: 'navbarAnimation',
                    icon: 'icon',
                    iconMeteor: 'imgMeteorClose'
                },
                displayiconMeteor: 'none'
            })
        }
    }
    meteorOnOff = () => {
        this.state.meteor === '' ? this.setState({ meteor: 'none', icon: meteorImagOff }) : this.setState({ meteor: '', icon: meteorImag })
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
                    <NavbarOptions options={options} />
                </nav>
                <MeteorRainAnimation display={this.state.meteor} />
            </>
        )
    }
}
