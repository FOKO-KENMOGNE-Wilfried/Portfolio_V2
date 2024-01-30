import { NavLink } from "react-router-dom";
import menu from "../../assets/icons/menu.jpg";
import { useState } from "react";
import { Link } from "react-scroll";


function Header(){

    const [show, setShow] = useState(true);

    function handleClick(){
        if(show){
            setShow(false);
            console.log(show);
        } else {
            setShow(true);
            console.log(show);
        }
    }

    return (
        <div className="flex ml-48 items-center">
            <div className="flex justify-around flex-row items-center bg-primary mt-5 w-5/6 rounded-full gap-navbar h-20">
                <div>
                    <img src={menu} alt="menu" className="w-20" onClick={() => handleClick()}/>
                </div>
                <div className="flex flex-row justify-center items-center gap-10 text-2xl">
                    <Link
                        to="about"
                        smooth={true}
                        offset={10}
                        duration={500}
                    >
                        About
                    </Link>
                    <Link
                        to="skill"
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        Skills
                    </Link>
                    <Link
                        to="project"
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >
                        project
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        Contacts
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;