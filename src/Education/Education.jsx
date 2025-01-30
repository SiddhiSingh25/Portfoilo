import { useState } from "react";
import Heading from "../Common/Heading";
import { IoTriangle } from "react-icons/io5";

function Education() {
    let colleges = {
        college1: {
            course: "Diploma",
            name: "Government Girls Polytechnic Ballia",
            year: "2022 - 2025",
            location: "Ballia",
            branch: "Branch : Information Technology",
            marks: "Aggregate : 82.6%",
            board: "Board : BTEUP",
            medium: "English",
        },
        college2: {
            course: "Senior Secondary Education",
            name: "Shri Krishn Inter College",
            year: "2020 - 2022",
            location: "Ballia",
            branch: "Percentage - 74.0%",
            marks: "Stream - Mathematics & Science",
            board: "Board - UP Board",
            medium: "Hindi",
        },
        college3: {
            course: "Secondary Education",
            name: "Meera Devi Balika Inter College",
            year: "2020",
            location: "Ballia",
            branch: "Percentage - 80.0%",
            marks: "Stream - Science",
            board: "Board - UP Board",
            medium: "Hindi",
        },
    };

    let [college, setCollege] = useState(colleges.college1);
    let [selectedCollege, setSelectedCollege] = useState("college1");

    let handleEduDetails = (collegeCount) => {
        setCollege(colleges[collegeCount]);
        setSelectedCollege(collegeCount);
    };

    return (
        <>
            <div
                className="md:min-h-[90vh] min-h-[70vh] w-[100vw] md:py-20 md:px-28 py-4 px-5 flex items-center justify-center flex-col"
                id="education"
            >
                <div className="w-[100%] flex items-center justify-center">
                    <div className="md:w-[62%] w-[100%] flex items-start justify-center mb-7 md:mb-9">
                        <Heading count="05." title="Education" />
                    </div>
                </div>

                <div className="md:h-[80vh] h-[100%] md:w-[62%] w-[100%] flex items-start justify-between flex-col">
                    <div className="leftEducation md:h-[25vh] h-auto w-[100%] flex flex-row md:flex-col items-start justify-start overflow-x-auto">
                        {Object.keys(colleges).map((key, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-[80vw] md:w-[19vw] cursor-pointer px-3 py-2 transition-all ease-in-out duration-200 ${selectedCollege === key
                                        ? "border-b-4 md:border-l-4 bg-gray-200 dark:bg-darkModeBox dark:border-darkModeHeading border-lightModeHeading"
                                        : "border-b-2 md:border-l-2 border-lightBlack dark:border-[#8892B0]"
                                    } hover:bg-gray-200 dark:hover:bg-gray-700`}
                                onClick={() => handleEduDetails(key)}
                            >
                                <h1
                                    className={`roboto transition-all ${selectedCollege === key
                                            ? "text-lightModeHeading dark:text-darkModeHeading"
                                            : "text-lightBlack dark:text-[#8892B0]"
                                        }`}
                                >
                                    {colleges[key].name}
                                </h1>
                            </div>
                        ))}
                    </div>

                    <div className="right h-[100%] w-[100%] md:w-[47%] py-9 px-2">
                        <h1 className="text-[3.6vh] md:text-[3.7vh] dark:text-[#E6F1FF] text-lightBlack roboto-bold mb-[0.2vh] leading-tight">
                            {college.course}
                            <span className="dark:text-darkModeHeading text-lightModeHeading text-[3.2vh]"> @</span>
                        </h1>
                        <h1 className="dark:text-darkModeHeading text-lightModeHeading md:-text-[3.5vh] text-[3.4vh] roboto-bold leading-tight md:leading-7">
                            {college.name}
                        </h1>
                        <p className="text-[14px] dark:text-[#8892B0] text-lightModeText mt-4 mb-1">{college.year}</p>
                        <p className="text-[14px] dark:text-[#8892B0] text-lightModeText mb-4">{college.location}</p>
                        <div className="flex items-start justify-start gap-2 flex-col">
                            <h1 className="flex items-center justify-start gap-x-2 gap-y-0">
                                <IoTriangle className="text-[1vh] rotate-90 dark:text-darkModeHeading text-lightModeHeading" />
                                <p className="text-[15px] Roboto dark:text-[#8892B0] text-lightModeText">{college.branch}</p>
                            </h1>
                            <h1 className="flex items-center justify-start gap-x-2 gap-y-0">
                                <IoTriangle className="text-[1vh] rotate-90 dark:text-darkModeHeading text-lightModeHeading" />
                                <p className="text-[15px] Roboto dark:text-[#8892B0] text-lightModeText">{college.marks}</p>
                            </h1>
                            <h1 className="flex items-center justify-start gap-x-2 gap-y-0">
                                <IoTriangle className="text-[1vh] rotate-90 dark:text-darkModeHeading text-lightModeHeading" />
                                <p className="text-[15px] Roboto dark:text-[#8892B0] text-lightModeText">{college.board}</p>
                            </h1>
                            <h1 className="flex items-center justify-start gap-x-2 gap-y-0">
                                <IoTriangle className="text-[1vh] rotate-90 dark:text-darkModeHeading text-lightModeHeading" />
                                <p className="text-[15px] Roboto dark:text-[#8892B0] text-lightModeText">{college.medium}</p>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
