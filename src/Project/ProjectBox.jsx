import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState, useEffect } from "react";
import schoolImg from "../assets/aisgazipur-in.png";
import danceImg from "../assets/dance-academy.png";
import nestmartImg from "../assets/nest-mart.png";
import "./Project.css";

function ProjectBox({ showAll, count }) {
  const details = [
    {
      projectName: "Freelance School Website",
      projectDesc:
        "A responsive and professional school website designed to provide students and parents with essential information about the school, including admissions, academics, facilities, announcements, gallery, and contact details.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "Framer Motion"],
      gitHub: "https://github.com/SiddhiSingh25",
      viewLink: "https://www.aisgazipur.in/",
      img: schoolImg,
      containerClass: "row",
      dataClass: "items-end", // flex-end on large screens
      dataClassPhone: "items-center", // center on small screens
      textAlign: "right",
      zIdx: "0",
      justify: "flex-end"
    },
    {
      projectName: "Dance Academy Website",
      projectDesc:
        "A modern and interactive dance academy website showcasing dance programs, academy information, instructors, gallery, workshops, and contact/enquiry sections with smooth animations.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "GSAP", "Framer Motion"],
      gitHub: "https://github.com/SiddhiSingh25",
      viewLink: "https://dance-academy-psi.vercel.app/",
      img: danceImg,
      containerClass: "row-reverse",
      dataClass: "items-start", // flex-start on large screens
      textAlign: "left",
      dataClassPhone: "items-center", // center on small screens
      zIdx: "9999",
      justify: "flex-start"
    },
    {
      projectName: "NestMart — E-Commerce",
      projectDesc:
        "A full-stack grocery e-commerce platform featuring product browsing, categories, product details, search, shopping cart, user authentication, and an organized online shopping experience.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      gitHub: "https://github.com/SiddhiSingh25",
      viewLink: "https://nest-mart-five.vercel.app/",
      img: nestmartImg,
      containerClass: "row",
      dataClass: "items-end", // flex-end on large screens
      dataClassPhone: "items-center", // center on small screens
      textAlign: "right",
      zIdx: "0",
      justify: "flex-end"
    }
  ];

  const projectsToShow = showAll ? details : details.slice(0, count);

  // Function to get the alignment based on screen size
  const getAlignItems = (dataClass) => {
    return window.innerWidth <= 768 ? "center" : dataClass;
  };

  // State to store the alignment
  const [alignItems, setAlignItems] = useState(() => {
    return details.map((project) => getAlignItems(project.dataClass));
  });

  // Effect to handle window resize and update alignment
  useEffect(() => {
    const handleResize = () => {
      setAlignItems(details.map((project) => getAlignItems(project.dataClass)));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {projectsToShow.map((elm, idx) => (
        <div
          key={elm.projectName + idx}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 my-6 md:my-12 relative"
          style={{ flexDirection: window.innerWidth > 768 ? elm.containerClass : 'column' }}
        >
          {/* Image Container */}
          <div className="w-full md:w-[55%] h-[240px] sm:h-[320px] md:h-[380px] rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
            <a href={elm.viewLink} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
              <img
                src={elm.img}
                alt={elm.projectName}
                className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Project Details */}
          <div
            className={`w-full md:w-[50%] flex flex-col gap-3 md:gap-4 ${
              elm.containerClass === 'row' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
            } items-start text-left`}
          >
            <span className="dark:text-darkModeHeading text-lightModeHeading text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Featured Project
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl dark:text-darkModeText text-lightModeText roboto-bold leading-tight">
              <a href={elm.viewLink} target="_blank" rel="noopener noreferrer" className="hover:text-lightModeHeading dark:hover:text-darkModeHeading transition-colors">
                {elm.projectName}
              </a>
            </h3>
            
            {/* Description Card */}
            <div className="w-full rounded-md bg-lightModeBox dark:bg-[#172A45] p-4 sm:p-5 shadow-md border border-gray-200 dark:border-gray-800/50">
              <p className="text-sm sm:text-base dark:text-[#98a2c2] text-gray-700 basic leading-relaxed">
                {elm.projectDesc}
              </p>
            </div>

            {/* Tech Stack */}
            <div className={`flex flex-wrap gap-2 sm:gap-3 w-full ${
              elm.containerClass === 'row' ? 'md:justify-end' : 'md:justify-start'
            } justify-start`}>
              {elm.techStack.map((item, i) => (
                <span key={item + i} className="text-xs sm:text-sm px-2.5 py-1 rounded bg-gray-200 dark:bg-[#112240] dark:text-[#64FFDA] text-lightModeHeading font-mono">
                  {item}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className={`flex items-center gap-4 mt-1 ${
              elm.containerClass === 'row' ? 'md:justify-end' : 'md:justify-start'
            } justify-start`}>
              <a 
                href={elm.gitHub} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-lightModeHeading dark:hover:text-[#64FFDA] transition-colors p-1"
                aria-label="GitHub Repository"
              >
                <FiGithub className="size-5 sm:size-6" />
              </a>
              <a 
                href={elm.viewLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-lightModeHeading dark:hover:text-[#64FFDA] transition-colors p-1"
                aria-label="Live Demo"
              >
                <FaArrowUpRightFromSquare className="size-5 sm:size-6" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectBox;
