import { useState } from "react";
import Heading from "../Common/Heading";
import ProjectBox from "./ProjectBox";
import Button from '../Common/Button';

function Project() {
    const [showAll, setShowAll] = useState(false);
    const [count, setCount] = useState(2);

    const totalProjects = 3;

    const handleBtn = () => {
        if (showAll) {
            setCount(2);
            setShowAll(false);
        } else {
            const newCount = count + 1;
            if (newCount >= totalProjects) {
                setCount(totalProjects); // Show all remaining projects
                setShowAll(true);
            } else {
                setCount(newCount);
            }
        }
    };
    return (
        <>
            <div className="min-h-screen w-full py-12 md:py-20 px-4 sm:px-8 md:px-16 flex items-center justify-center" id="projects">
                <div className="w-full max-w-7xl flex items-start justify-center flex-col gap-10">
                    <div className="w-full md:w-[48%]">
                        <Heading count="03." title="Projects" />
                    </div>
                    <div className="w-full flex items-center justify-center gap-12 md:gap-24 flex-col">
                        <ProjectBox showAll={showAll} count={count} />
                        <Button btnData={count >= totalProjects ? "Show Less" : "View More"} handleBtn={handleBtn} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
