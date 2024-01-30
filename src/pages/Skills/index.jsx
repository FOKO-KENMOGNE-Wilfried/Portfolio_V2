import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "../../components/Container";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import javascript from "../../assets/icons/js.svg";
import tailwindcss from "../../assets/icons/tailwind.svg";
import react from "../../assets/icons/reactjs.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import mongodb from "../../assets/icons/mongodb2.svg";
import postgressql from "../../assets/icons/postgresql.svg";
import Card from "../../components/Card";
import { useEffect } from "react";


function Skills(){

    function animationCards(){
        gsap.fromTo(".custom-css", {
            scale: 0,
            opacity: 0,
        },{
            duration: 1,
            ease: "power3.out",
            scale: 1,
            opacity: 1,
            stagger: {
                each: 0.2,
                from: "random"
            }
        });
    }

    useEffect(() => {
        animationCards();
    }, []);

    return (
        <div id="skill">
            <Container label={"Skills"} css="grid grid-rows-2 grid-cols-4 gap-x-20 gap-y-16">
                <div className="custom-css">
                    <Card label={"html"} img={html}/>
                </div>
                <div className="custom-css">
                    <Card label={"css"} img={css}/>
                </div>
                <div className="custom-css">
                    <Card label={"javascript"} img={javascript}/>
                </div>
                <div className="custom-css">
                    <Card label={"tailwindcss"} img={tailwindcss}/>
                </div>
                <div className="custom-css">
                    <Card label={"react"} img={react}/>
                </div>
                <div className="custom-css">
                    <Card label={"nodejs"} img={nodejs}/>
                </div>
                <div className="custom-css">
                    <Card label={"mongoDB"} img={mongodb}/>
                </div>
                <div className="custom-css">
                    <Card label={"postgreSQL"} img={postgressql}/>
                </div>
            </Container>
        </div>
    )
}

export default Skills;