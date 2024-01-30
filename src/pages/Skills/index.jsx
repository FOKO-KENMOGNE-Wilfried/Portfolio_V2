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
        gsap.fromTo(".custom-html", {
            scale: 0,
            opacity: 0,
        },{
            duration: 1,
            ease: "power3.out",
            scale: 1,
            opacity: 1,
        });
    }

    useEffect(() => {
        animationCards();
    }, []);

    return (
        <div id="skill">
            <Container label={"Skills"} css="grid grid-rows-2 grid-cols-4 gap-x-20 gap-y-16">
                <div className="custom-html">
                    <Card label={"HTML"} img={html}/>
                </div>
                <Card label={"CSS"} img={css} customClassName={"custom-css"}/>
                <Card label={"JavaScript"} img={javascript} customClassName={"custom-javascript"}/>
                <Card label={"TailwindCss"} img={tailwindcss} customClassName={"custom-tailwindcss"}/>
                <Card label={"React"} img={react} customClassName={"custom-react"}/>
                <Card label={"NodeJS"} img={nodejs} customClassName={"custom-nodejs"}/>
                <Card label={"MongoDB"} img={mongodb} customClassName={"custom-mongodb"}/>
                <Card label={"PostgreSQL"} img={postgressql} customClassName={"custom-postgresql"}/>
            </Container>
        </div>
    )
}

export default Skills;