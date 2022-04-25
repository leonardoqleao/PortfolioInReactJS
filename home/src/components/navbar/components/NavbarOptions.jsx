import { Component } from "react";
import OptionContact from "./OptionContact";
import OptionHome from "./OptionHome";
import OptionProfile from "./OptionProfile";
import OptionProjects from "./OptionProjects";

export default class NavbarOptions extends Component {
    render() {
        const {options} = this.props
        const {home, profile, projects, contact} = this.props.ids
        return (
            <ul className='navbarUl1'>
                <OptionHome home={home} options={options}/>
                <OptionProfile profile={profile} options={options}/>
                <OptionProjects projects={projects} options={options}/>
                <OptionContact contact={contact} options={options}/>
            </ul>
        )
    }
}