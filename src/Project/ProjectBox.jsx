import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useState, useEffect } from "react";
import "./Project.css";

function ProjectBox({ showAll, count }) {
  const details = [
    {
      projectName: "Scriptified",
      projectDesc:
        "A blazing fast Progressive Web App built in NextJS and Tailwind CSS. Built for publishing our curated weekly newsletters on JavaScript & React.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Gsap"],
      gitHub: "alpha",
      viewLink: "sigma",
      img: "https://img.freepik.com/premium-photo/mobile-modern-playing-video-with-headphone-floating-pink-background-podcast-listening-entertainment-musical-studio-karaoke-concept-wireless-media-connection-streaming-3d-render-illustration_598821-1648.jpg",
      containerClass: "row",
      dataClass: "items-end", // flex-end on large screens
      dataClassPhone: "items-center", // center on small screens
      textAlign: "right",
      zIdx: "0",
    },
    {
      projectName: "E-Commerce",
      projectDesc:
        "An e-commerce website built with NextJS, Tailwind CSS, and MongoDB for managing products and orders.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "MongoDB"],
      gitHub: "alpha",
      viewLink: "sigma",
      img: "https://siddhisingh.netlify.app/ecommerce-10.webp",
      containerClass: "row-reverse",
      dataClass: "items-start", // flex-start on large screens
      textAlign: "left",
      dataClassPhone: "items-center", // center on small screens
      zIdx: "9999",
      justify : "flex-start"
    },
    {
      projectName: "Scriptified",
      projectDesc:
        "A blazing fast Progressive Web App built in NextJS and Tailwind CSS. Built for publishing our curated weekly newsletters on JavaScript & React.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Gsap"],
      gitHub: "alpha",
      viewLink: "sigma",
      img: "https://img.freepik.com/premium-photo/mobile-modern-playing-video-with-headphone-floating-pink-background-podcast-listening-entertainment-musical-studio-karaoke-concept-wireless-media-connection-streaming-3d-render-illustration_598821-1648.jpg",
      containerClass: "row",
      dataClass: "items-end", // flex-end on large screens
      dataClassPhone: "items-center", // center on small screens
      textAlign: "right",
      zIdx: "0",

    },
    {
      projectName: "E-Commerce",
      projectDesc:
        "An e-commerce website built with NextJS, Tailwind CSS, and MongoDB for managing products and orders.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "MongoDB"],
      gitHub: "alpha",
      viewLink: "sigma",
      img: "https://siddhisingh.netlify.app/ecommerce-10.webp",
      containerClass: "row-reverse",
      dataClass: "items-start", // flex-start on large screens
      textAlign: "left",
      dataClassPhone: "items-center", // center on small screens
      zIdx: "9999",
      justify : "flex-start"
    },
    {
      projectName: "Scriptified",
      projectDesc:
        "A blazing fast Progressive Web App built in NextJS and Tailwind CSS. Built for publishing our curated weekly newsletters on JavaScript & React.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Gsap"],
      gitHub: "alpha",
      viewLink: "sigma",
      img: "https://img.freepik.com/premium-photo/mobile-modern-playing-video-with-headphone-floating-pink-background-podcast-listening-entertainment-musical-studio-karaoke-concept-wireless-media-connection-streaming-3d-render-illustration_598821-1648.jpg",
      containerClass: "row",
      dataClass: "items-end", // flex-end on large screens
      dataClassPhone: "items-center", // center on small screens
      textAlign: "right",
      zIdx: "0",
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
          className="md:h-[83vh] h-[53vh] w-[100%] flex"
          style={{ flexDirection: elm.containerClass }}
        >
          <div className="project-image md:w-[55%] w-[100%] h-[90%] md:h-[100%]">
            <a href={elm.viewLink}>
              <img
                src={elm.img}
                alt={elm.projectName}
                className="rounded md:h-[100%] md:w-[100%] h-[100%] object-cover object-center img"
              />
            </a>
          </div>
          <div
            className={`md:w-[45%] w-[90%] h-[50%] absolute md:relative lg:relative 
              md:h-[100%] flex md:right-0 right-10 justify-center flex-col gap-4 ${elm.dataClass}`}
            style={{ alignItems: alignItems[idx] }}
          >
            <h1 className="dark:text-darkModeHeading text-lightModeHeading text-[13px]">Featured Project</h1>
            <h1 className="text-4xl  dark:text-darkModeText text-lightModeText roboto-bold">
              {elm.projectName}
            </h1>
            <div
              className="md:w-[112%] w-[85%] rounded h-[16vh]  bg-transparent dark:bg-transparent md:bg-lightModeBox dark:md:bg-[#172A45] flex items-center justify-center md:items-center md:justify-end px-5"
              style={{ zIndex: elm.zIdx }}
            >
              <p
                className="text-[15px] dark:text-[#98a2c2] text-red-50 basic"
                style={{ textAlign: elm.textAlign }}
              >
                {elm.projectDesc}
              </p>
            </div>
            <div className="flex gap-8 flex-wrap w-[90%] md:w-[100%] md:items-start md:justify-end items-center justify-center" style={{justifyContent : elm.justify}}>
              {elm.techStack.map((item, idx) => (
                <span key={item + idx} className="text-[13px] dark:text-[#98a2c2] text-lightBlack">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={elm.gitHub}>
                <FiGithub className="text-[#E6F1FF] size-5" />
              </a>
              <a href={elm.viewLink}>
                <FaArrowUpRightFromSquare className="text-[#E6F1FF] size-5" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectBox;
