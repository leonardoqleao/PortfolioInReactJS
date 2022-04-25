import { Component } from "react";
import OptionContact from "./OptionContact";
import OptionHome from "./OptionHome";
import OptionProfile from "./OptionProfile";
import OptionProjects from "./OptionProjects";

export default class NavbarOptions extends Component {
    render() {
        const {options} = this.props
        return (
            <ul className='navbarUl1'>
                <OptionHome options={options}/>
                <OptionProfile options={options}/>
                <OptionProjects options={options}/>
                <OptionContact options={options}/>
            </ul>
        )
    }
}