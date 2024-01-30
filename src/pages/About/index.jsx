import profile from "../../assets/img/profile.png";

function About(){
    return (
        <div id="about" className="flex flex-col justify-center items-center w-10/12">
            <div className="flex flex-col pt-4 w-9/12">
                <div className="w-2/4 pb-16 text-3xl">
                    Hello ! I’me Wilfried FOKO KENMOGNE a young computer engineer 
                    and Web Developer
                </div>
                <div className="relative flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center">
                        <div className="w-border h-border rounded-full absolute bg-black z-0"></div>
                        <div className=" w-border h-border rounded-full ml-10 z-10 bg-secondary relative">
                            <img src={profile} alt="profile" className="absolute w-72 bottom-16 left-20"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center bottom-0 z-20 bg-primary text-2xl w-12/12 p-10 text-center rounded-about -mt-28">
                        <h1 className="text-5xl mb-8">ABOUT ME</h1>
                        I'm FOKO Wilfried a young Camerounian, 
                        front-end developer and computer engeneering 
                        student. I'm passionate about IT in general but in 
                        particular about development, my goal is to become 
                        great in the field and a source of inspiration for others.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;