import { Component } from 'react';
import NavbarOptions from './components/NavbarOptions';
import './css/navbar.css';
import './css/navbar-animation.css';
import './css/navbar-icon.css';
import './css/navbar-responsive-mobile.css';
import './css/navbar-reponsive-mobile-animation.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileResponsive: {
                icon: {
                    activeIcon: 'navbarIconActive',
                    icon: 'icon'
                },
                options: {
                    options: 'navbar-options',
                    ids: {
                        home: 'animationInHomeOption',
                        profile: 'animationInProfileOption',
                        projects: 'animationInProjectsOption',
                        contact: 'animationInContactOption'
                    }
                },
                navbar: {
                    navbar: 'navbar',
                    id: 'navbarAnimation',
                }
            }
        }
    }
    onClickmobileResponsive = () => {
        if (this.state.mobileResponsive.icon.activeIcon === 'navbarIconActive') {
            this.setState({
                mobileResponsive: {
                    icon: {
                        icon: 'mobile-icon',
                        activeIcon: ''
                    },
                    options: {
                        options: 'mobile-navbar-options',
                        ids: {
                            home: 'animationInHomeOptionClose',
                            profile: 'animationInProfileOptionClose',
                            projects: 'animationInProjectsOptionClose',
                            contact: 'animationInContactOptionClose'
                        }
                    },
                    navbar: {
                        navbar: 'mobile-navbar',
                        id: 'navbarAnimationClose',
                    }
                }
            })
        } else {
            this.setState({
                mobileResponsive: {
                    icon: {
                        icon: 'icon',
                        activeIcon: 'navbarIconActive'
                    },
                    options: {
                        options: 'navbar-options',
                        ids: {
                            home: 'animationInHomeOption',
                            profile: 'animationInProfileOption',
                            projects: 'animationInProjectsOption',
                            contact: 'animationInContactOption'
                        }
                    },
                    navbar: {
                        navbar: 'navbar',
                        id: 'navbarAnimation',
                    }
                }
            })
        }
    }
    render() {
        const { options } = this.state.mobileResponsive.options
        const { ids } = this.state.mobileResponsive.options
        const { navbar } = this.state.mobileResponsive.navbar
        const { id } = this.state.mobileResponsive.navbar
        const { icon, activeIcon } = this.state.mobileResponsive.icon
        return (
            <nav id={id} className={navbar}>
                <div onClick={this.onClickmobileResponsive} class={icon}>
                    <div class={"navbarIcon " + activeIcon}><span></span></div>
                </div>
                <NavbarOptions options={options} ids={ids} />
            </nav>
        )
    }
}
