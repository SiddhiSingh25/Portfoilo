import { useState } from "react";
import Heading from "../Common/Heading";
import { IoTriangle } from "react-icons/io5";

function Education() {
    let colleges = {
        exp1: {
            course: "React Native Developer (Full-time)",
            name: "Macreel Infosoft Pvt. Ltd.",
            year: "Feb 2026 - Present",
            location: "Sector 63, Noida, UP",
            branch: "Department : Information Technology (IT)",
            marks: "Role : Mobile App & Web Development",
            board: "Mode : On-site (6 Days/Week)",
            medium: "Tech Stack : React Native, React.js, JavaScript, REST APIs",
        },
        college1: {
            course: "B.Tech - CSE (Data Science)",
            name: "Bachelor of Technology",
            year: "2024 - Present (5th Semester)",
            location: "Noida, Uttar Pradesh",
            branch: "Branch : Computer Science & Data Science",
            marks: "Status : Currently Pursuing (5th Sem)",
            board: "Roll No : 2504731549015",
            medium: "Medium : English",
        },
        college2: {
            course: "Diploma in Information Technology",
            name: "Government Girls Polytechnic Ballia",
            year: "2022 - 2025",
            location: "Ballia, UP",
            branch: "Branch : Information Technology",
            marks: "Aggregate : 82.6%",
            board: "Board : BTEUP",
            medium: "Medium : English",
        },
        college3: {
            course: "Senior Secondary Education (12th)",
            name: "Shri Krishn Inter College",
            year: "2020 - 2022",
            location: "Ballia, UP",
            branch: "Percentage : 74.0%",
            marks: "Stream : Mathematics & Science",
            board: "Board : UP Board",
            medium: "Medium : Hindi",
        },
    };

    let [college, setCollege] = useState(colleges.exp1);
    let [selectedCollege, setSelectedCollege] = useState("exp1");

    let handleEduDetails = (collegeCount) => {
        setCollege(colleges[collegeCount]);
        setSelectedCollege(collegeCount);
    };

    return (
        <>
            <div
                className="min-h-screen w-full py-12 md:py-20 px-4 sm:px-8 md:px-16 flex items-center justify-center flex-col"
                id="education"
            >
                <div className="w-full max-w-5xl flex items-start justify-start mb-8 md:mb-12">
                    <Heading count="05." title="Experience & Education" />
                </div>

                <div className="w-full max-w-5xl flex items-start justify-between flex-col md:flex-row gap-8 md:gap-12">
                    {/* Left Tab Buttons */}
                    <div className="leftEducation w-full md:w-[35%] flex flex-row md:flex-col items-start justify-start overflow-x-auto border-b md:border-b-0 md:border-l border-gray-300 dark:border-gray-700">
                        {Object.keys(colleges).map((key, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-auto min-w-[180px] md:min-w-full cursor-pointer px-4 py-3 text-sm font-semibold transition-all ease-in-out duration-200 ${
                                    selectedCollege === key
                                        ? "border-b-2 md:border-b-0 md:border-l-4 bg-gray-200 dark:bg-darkModeBox dark:border-darkModeHeading border-lightModeHeading text-lightModeHeading dark:text-darkModeHeading"
                                        : "border-b-2 md:border-b-0 md:border-l-2 border-transparent text-gray-600 dark:text-[#8892B0]"
                                } hover:bg-gray-200 dark:hover:bg-gray-800`}
                                onClick={() => handleEduDetails(key)}
                            >
                                <h4 className="roboto truncate">{colleges[key].name}</h4>
                            </div>
                        ))}
                    </div>

                    {/* Right Details Panel */}
                    <div className="right w-full md:w-[60%] flex flex-col gap-3 py-2 px-2">
                        <h3 className="text-xl sm:text-2xl md:text-3xl dark:text-[#E6F1FF] text-lightBlack roboto-bold leading-tight">
                            {college.course}
                            <span className="dark:text-darkModeHeading text-lightModeHeading"> @ {college.name}</span>
                        </h3>
                        <div className="flex flex-wrap gap-x-4 text-xs sm:text-sm dark:text-[#8892B0] text-gray-600 mt-1 mb-3">
                            <span>📅 {college.year}</span>
                            <span>📍 {college.location}</span>
                        </div>
                        <div className="flex items-start justify-start gap-3 flex-col text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <IoTriangle className="text-xs rotate-90 dark:text-darkModeHeading text-lightModeHeading flex-shrink-0" />
                                <p className="Roboto dark:text-[#8892B0] text-gray-700">{college.branch}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoTriangle className="text-xs rotate-90 dark:text-darkModeHeading text-lightModeHeading flex-shrink-0" />
                                <p className="Roboto dark:text-[#8892B0] text-gray-700">{college.marks}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoTriangle className="text-xs rotate-90 dark:text-darkModeHeading text-lightModeHeading flex-shrink-0" />
                                <p className="Roboto dark:text-[#8892B0] text-gray-700">{college.board}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoTriangle className="text-xs rotate-90 dark:text-darkModeHeading text-lightModeHeading flex-shrink-0" />
                                <p className="Roboto dark:text-[#8892B0] text-gray-700">{college.medium}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
