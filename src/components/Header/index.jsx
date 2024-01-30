import { NavLink } from "react-router-dom";
import menu from "../../assets/icons/menu.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";


function Header(){

    const [show, setShow] = useState(true);

    function showNavBar(){
        if(show){
            setShow(false);
            console.log(show);
        } else {
            setShow(true);
            console.log(show);
        }
    }

    const scroll = (e) => {
        if(e.deltaY < 0){
            console.log("down");
            setShow(true);
        } else {
            console.log("up");
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("wheel", scroll);

        return () => {
            window.removeEventListener("wheel", scroll);
        }
    })

    return (
        <div className=" sticky top-0 z-30 flex ml-48 items-center">
            <div className={`flex flex-row items-center ${show ? "w-10/12" : "w-14 h-14 "} transition-width ease-in-out duration-500 delay-150 bg-primary mt-5 w-5/6 rounded-full h-20`}>
                <div>
                    <img src={menu} alt="menu" className="w-20" onClick={() => showNavBar()}/>
                </div>
                <div className={`mr-10 ${show ? "w-full opacity-1" : "opacity-0 hidden"} transition-opacity ease-in-out duration-200 delay-500 w-full flex flex-row justify-end overflow-hidden items-center gap-10 text-2xl`}>
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