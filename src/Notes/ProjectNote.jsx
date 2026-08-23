import { FiFolder } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function ProjectNote({ showPr, projectCount }) {
    let projectDetails = [
        {
            github: "https://github.com/SiddhiSingh25",
            viewProject: "https://nest-mart-five.vercel.app/",
            projectName: "NestMart — E-Commerce",
            projectDesc: "A full-stack grocery e-commerce platform featuring product browsing, categories, search, shopping cart, and user authentication.",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"]
        },
        {
            github: "https://github.com/SiddhiSingh25",
            viewProject: "https://github.com/SiddhiSingh25",
            projectName: "Job Portal",
            projectDesc: "Full-stack job portal web application for searching job listings, candidate profile management, and job applications.",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB"]
        },
        {
            github: "https://github.com/SiddhiSingh25/Airbnb",
            viewProject: "https://siddhisingh25.github.io/Airbnb/",
            projectName: "Airbnb UI Clone",
            projectDesc: "Airbnb UI clone using HTML and CSS with smooth transitions for a clean, responsive user experience.",
            techStack: ["HTML", "CSS", "JavaScript", "Responsive"]
        },
        {
            github: "https://github.com/SiddhiSingh25/Pflo",
            viewProject: "https://siddhisingh.netlify.app/",
            projectName: "Personal Portfolio",
            projectDesc: "Personal portfolio website built with React and Tailwind CSS featuring GSAP animations and interactive UI components.",
            techStack: ["React.js", "Tailwind", "GSAP", "Framer Motion"]
        },
        {
            github: "https://github.com/SiddhiSingh25/Mini-Music-Player",
            viewProject: "https://musicplayerbysid.netlify.app",
            projectName: "Mini Music Player",
            projectDesc: "A lightweight mini music player created using HTML, CSS, and JavaScript, featuring play, pause, and skip controls.",
            techStack: ["HTML", "CSS", "JavaScript", "Responsive"]
        },
        {
            github: "https://github.com/SiddhiSingh25/Animated-Web",
            viewProject: "https://siddhisingh25.github.io/Animated-Web/",
            projectName: "Awwards Site Clone",
            projectDesc: "Awards site clone built with HTML, CSS, and GSAP, featuring smooth animations and responsive design.",
            techStack: ["HTML", "CSS", "GSAP", "Animation"]
        }
    ];
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