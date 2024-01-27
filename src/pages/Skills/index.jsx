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


function Skills(){
    return (
        <div>
            <Container label={"Skills"} css="grid grid-rows-2 grid-cols-4 gap-x-20 gap-y-16">
                <Card label={"HTML"} img={html} />
                <Card label={"CSS"} img={css} />
                <Card label={"JavaScript"} img={javascript} />
                <Card label={"TailwindCss"} img={tailwindcss} />
                <Card label={"React"} img={react} />
                <Card label={"NodeJS"} img={nodejs} />
                <Card label={"MongoDB"} img={mongodb} />
                <Card label={"PostgreSQL"} img={postgressql} />
            </Container>
        </div>
    )
}

export default Skills;