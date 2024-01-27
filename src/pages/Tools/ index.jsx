import Card from "../../components/Card";
import Container from "../../components/Container";
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import netlify from "../../assets/icons/netlify.svg";
import vscode from "../../assets/icons/vscode.svg";


function Tools(){
    return (
        <div>
            <Container label={"Tools"} css="grid grid-rows-1 grid-cols-4 gap-x-20 gap-y-16">
                <Card label={"Git"} img={git}/>
                <Card label={"GitHub"} img={github}/>
                <Card label={"Netlify"} img={netlify}/>
                <Card label={"VsCode"} img={vscode}/>
            </Container>
        </div>
    )
}

export default Tools;