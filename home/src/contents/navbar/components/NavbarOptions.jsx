import { Component } from "react";

export default class NavbarOptions extends Component {
    constructor(props){
        super(props);
        this.state = {
            className: {
                home: 'opNavbarSelect',
                profile: 'opNavbarSelectOff',
                projects: 'opNavbarSelectOff',
                contact: 'opNavbarSelectOff',
            }
        }
    }
    homeClick = () => {
        this.props.onclickt()
        this.setState({
            className: {
                home: 'opNavbarSelect',
                profile: 'opNavbarSelectOff',
                projects: 'opNavbarSelectOff',
                contact: 'opNavbarSelectOff',
            }
        })
    }
    profileClick = () => {
        this.props.onclickt()
        this.setState({
            className: {
                home: 'opNavbarSelectOff',
                profile: 'opNavbarSelect',
                projects: 'opNavbarSelectOff',
                contact: 'opNavbarSelectOff',
            }
        })
    }
    projectsClick = () => {
        this.props.onclickt()
        this.setState({
            className: {
                home: 'opNavbarSelectOff',
                profile: 'opNavbarSelectOff',
                projects: 'opNavbarSelect',
                contact: 'opNavbarSelectOff',
            }
        })
    }
    contactClick = () => {
        this.props.onclickt()
        this.setState({
            className: {
                home: 'opNavbarSelectOff',
                profile: 'opNavbarSelectOff',
                projects: 'opNavbarSelectOff',
                contact: 'opNavbarSelect',
            }
        })
    }

    render() {
        const { options } = this.props
        return (
            <ul className='navbarUl1'>
                <li onClick={this.homeClick} id='animationInHomeOption' className={options}>
                    <a className={this.state.className.home} href="#Home">Home</a>
                </li>

                <li onClick={this.profileClick} id='animationInProfileOption' className={options}>
                    <a className={this.state.className.profile} href="#profile">Profile</a>
                </li>

                <li onClick={this.projectsClick} id='animationInProjectsOption' className={options}>
                    <a className={this.state.className.projects} href="#projects">Projects</a>
                </li>

                <li onClick={this.contactClick} id='animationInContactOption' className={options}>
                    <a className={this.state.className.contact} href="#Contact">Contact</a>
                </li>
            </ul>
        )
    }
}