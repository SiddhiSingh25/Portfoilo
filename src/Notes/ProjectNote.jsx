import { FiFolder } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function ProjectNote({ showPr, projectCount }) {
    let projectDetails = [{
        github: "https://github.com/SiddhiSingh25/Mini-Music-Player",
        viewProject: "https://musicplayerbysid.netlify.app",
        projectName: "A mini-music player",
        projectDesc: "A lightweight mini music player created using HTML, CSS, and JavaScript, featuring basic controls for play, pause, and skip. ",
        techStack: ["HTML", "CSS", "JavaScript", "Responsive"]
    }, {
        github: "https://github.com/SiddhiSingh25/Airbnb",
        viewProject: "https://siddhisingh25.github.io/Airbnb/",
        projectName: "Airbnb UI Clone",
        projectDesc: "Airbnb UI clone using HTML and CSS with smooth transitions for a clean, responsive design",
        techStack: ["HTML", "CSS", "Responsive"]
    }, {
        github: "https://github.com/SiddhiSingh25/Animated-Web",
        viewProject: "https://siddhisingh25.github.io/Animated-Web/",
        projectName: "Awwards site clone",
        projectDesc: "Awards site clone built with HTML, CSS, and GSAP, featuring smooth animations and responsive design for a dynamic and interactive user experience.",
        techStack: ["HTML", "CSS", "GSAP", "Animation", "Resposive"]
    }
        , {
        github: "https://github.com/SiddhiSingh25/Pflo",
        viewProject: "https://siddhisingh.netlify.app/",
        projectName: "Portfolio",
        projectDesc: "Portfolio website built with HTML, CSS, and JavaScript, featuring smooth animations with the help of gsap for a better User Experience.",
        techStack: ["HTML", "CSS", "JavaScript", "GSAP"]
    },
    {
        github: "https://github.com/SiddhiSingh25/Mini-Music-Player",
        viewProject: "https://musicplayerbysid.netlify.app",
        projectName: "A mini-music player",
        projectDesc: "A lightweight mini music player created using HTML, CSS, and JavaScript, featuring basic controls for play, pause, and skip. ",
        techStack: ["HTML", "CSS", "JavaScript", "Responsive"]
    }, {
        github: "https://github.com/SiddhiSingh25/Airbnb",
        viewProject: "https://siddhisingh25.github.io/Airbnb/",
        projectName: "Airbnb UI Clone",
        projectDesc: "Airbnb UI clone using HTML and CSS with smooth transitions for a clean, responsive design",
        techStack: ["HTML", "CSS", "Responsive"]
    }, {
        github: "https://github.com/SiddhiSingh25/Animated-Web",
        viewProject: "https://siddhisingh25.github.io/Animated-Web/",
        projectName: "Awwards site clone",
        projectDesc: "Awards site clone built with HTML, CSS, and GSAP, featuring smooth animations and responsive design for a dynamic and interactive user experience.",
        techStack: ["HTML", "CSS", "GSAP", "Animation", "Resposive"]
    }
        , {
        github: "https://github.com/SiddhiSingh25/Pflo",
        viewProject: "https://siddhisingh.netlify.app/",
        projectName: "Portfolio",
        projectDesc: "Portfolio website built with HTML, CSS, and JavaScript, featuring smooth animations with the help of gsap for a better User Experience.",
        techStack: ["HTML", "CSS", "JavaScript", "GSAP"]
    }];
    let alpha = showPr ? projectDetails : projectDetails.slice(0, projectCount);
    console.log(alpha)
    return (
        <>
            {alpha.map((elm) => (
                <div className="md:h-[40vh] h-[35vh] md:w-[31vw] w-[100%] rounded py-8 px-5 flex items-start justify-start flex-col bg-lightModeBox dark:bg-[#172A45]">
                    <div className="flex items-center justify-between w-[100%] mb-5">
                        <div><FiFolder className="size-8 dark:text-darkModeHeading text-lightModeBg font-light" /></div>
                        <div className="flex items-center justify-center gap-2">
                            <a href={elm.github}><VscGithubAlt /></a>
                            <a href={elm.viewProject}> <FaArrowUpRightFromSquare /></a>
                        </div>
                    </div>
                    <h1 className="text-[3vh] text-lightModeText dark:text-darkmodeSpan roboto-bold mb-3">{elm.projectName}</h1>
                    <p className="basic md:text-[14px] text-[18px] dark:text-[#828dae] text-red-50 mb-2">{elm.projectDesc}</p>
                    <div className="flex roboto gap-4  text-red-50 dark:text-[#828dae]  basicmt-10">
                        {elm.techStack.map((item, idx) =>
                            <span key={idx} className="text-[13px]">{item}</span>
                        )}
                    </div>
                </div>
            ))}
        </>
    )
}
export default ProjectNote