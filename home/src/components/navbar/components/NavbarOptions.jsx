import { Component } from "react";
import OptionContact from "./OptionContact";
import OptionHome from "./OptionHome";
import OptionProfile from "./OptionProfile";
import OptionProjects from "./OptionProjects";

export default class NavbarOptions extends Component {
    render() {
        return (
            <ul className='navbarUl1'>
                <OptionHome/>
                <OptionProfile/>
                <OptionProjects/>
                <OptionContact/>
            </ul>
        )
    }
}