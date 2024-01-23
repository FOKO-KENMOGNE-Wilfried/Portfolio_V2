import { NavLink } from "react-router-dom";


function Header(){
    return (
        <div>
            <div>
                <img src="" alt="menu" />
            </div>
            <div>
                <NavLink>About</NavLink>
                <NavLink>Skills</NavLink>
                <NavLink>project</NavLink>
                <NavLink>Contacts</NavLink>
            </div>
        </div>
    )
}

export default Header;