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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {alpha.map((elm, index) => (
                <div 
                    key={elm.projectName + index}
                    className="w-full rounded-lg p-6 flex flex-col justify-between bg-lightModeBox dark:bg-[#172A45] border border-gray-200 dark:border-gray-800 shadow-sm hover:-translate-y-1 transition-transform duration-300"
                >
                    <div>
                        <div className="flex items-center justify-between w-full mb-4">
                            <FiFolder className="size-7 dark:text-darkModeHeading text-lightModeHeading" />
                            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <a href={elm.github} target="_blank" rel="noopener noreferrer" className="hover:text-lightModeHeading dark:hover:text-darkModeHeading transition-colors p-1">
                                    <VscGithubAlt className="size-5" />
                                </a>
                                <a href={elm.viewProject} target="_blank" rel="noopener noreferrer" className="hover:text-lightModeHeading dark:hover:text-darkModeHeading transition-colors p-1">
                                    <FaArrowUpRightFromSquare className="size-4" />
                                </a>
                            </div>
                        </div>
                        <h3 className="text-xl roboto-bold text-lightModeText dark:text-darkmodeSpan mb-2 hover:text-lightModeHeading dark:hover:text-darkModeHeading transition-colors">
                            <a href={elm.viewProject} target="_blank" rel="noopener noreferrer">
                                {elm.projectName}
                            </a>
                        </h3>
                        <p className="basic text-sm dark:text-[#828dae] text-gray-600 mb-4 leading-relaxed">
                            {elm.projectDesc}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                        {elm.techStack.map((item, idx) => (
                            <span key={idx} className="text-xs font-mono dark:text-[#828dae] text-gray-500">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ProjectNote