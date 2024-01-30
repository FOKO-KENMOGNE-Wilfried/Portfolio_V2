import gsap from "gsap";
import Card from "../../components/Card";
import Container from "../../components/Container";
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import netlify from "../../assets/icons/netlify.svg";
import vscode from "../../assets/icons/vscode.svg";
import { useEffect } from "react";


function Tools(){

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
        <div id="tool">
            <Container label={"Tools"} css="grid grid-rows-1 grid-cols-4 gap-x-20 gap-y-16">
                <div className="custom-css">
                    <Card label={"Git"} img={git}/>
                </div>
                <div className="custom-css">
                    <Card label={"Github"} img={github}/>
                </div>
                <div className="custom-css">
                    <Card label={"netlify"} img={netlify}/>
                </div>
                <div className="custom-css">
                    <Card label={"vscode"} img={vscode}/>
                </div>
            </Container>
        </div>
    )
}

export default Tools;