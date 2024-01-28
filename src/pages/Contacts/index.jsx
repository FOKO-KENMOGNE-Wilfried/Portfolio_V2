import Card_H from "../../components/Card_H";
import Container from "../../components/Container";
import mail from "../../assets/icons/mail.svg";
import mail_dark from "../../assets/icons/mail_dark.svg";
import phone from "../../assets/icons/phone.svg";
import phone_dark from "../../assets/icons/phone_dark.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github_light.svg";
import { useState } from "react";


function Contacts(){

    const [isHover, setHover] = useState(false);
    const [isSelect, setSelect] = useState(false);
    const [isSelect1, setSelect1] = useState(false);

    return (
        <div>
            <Container label={"Contacts"}>
                <div
                    onMouseEnter={() => setSelect(true)}
                    onMouseLeave={() => setSelect(false)}
                >
                    <Card_H label={"fokowilfried7@gmail.com"} img={ !isHover ? mail : isSelect ? mail_dark : mail } isHover={isHover} setHover={setHover}/>
                </div>
                <p className="pt-5 text-center">
                    click to copy
                </p>
                <div
                    onMouseEnter={() => setSelect1(true)}
                    onMouseLeave={() => setSelect1(false)}
                >
                    <Card_H label={"620131496 / 683415230"} img={ !isHover ? phone : isSelect1 ? phone_dark : phone } isHover={isHover} setHover={setHover}/>
                </div>
                <a href="https://www.linkedin.com/in/foko-kenmogne-wilfried-0283a825b">
                    <img src={linkedin} alt="linkedin" className="absolute right-2 bottom-4 w-12 h-12"/>
                </a>
                <a href="https://github.com/FOKO-KENMOGNE-Wilfried">
                    <img src={github} alt="github" className="absolute right-16 bottom-4 w-12 h-12"/>
                </a>
            </Container>
        </div>
    )
}

export default Contacts;