import { useState } from "react";
import Heading from "../Common/Heading";
import ProjectBox from "./ProjectBox";
import Button from '../Common/Button';

function Project() {
    const [showAll, setShowAll] = useState(false);
    const [count, setCount] = useState(2);
    
    const totalProjects = 5; 

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
            <div className="md:min-h-[100vh] min-h-[80vh] w-[100vw] md:py-10 md:px-16 py-4 px-5 lg:px-6 lg:py-6 " id="projects">
                <div className="h-[100%] w-[100%] flex items-start justify-center flex-col md:py-10 md:px-16 py-4 px-5 lg:px-6 lg:py-6  gap-10">
                    <div className="md:w-[48%] w-[100%]">
                        <Heading count="03." title="Featured Project" />
                    </div>
                    <div className="h-[100%] w-[100%] flex items-center justify-center gap-12 md:gap-28 flex-col">
                        <ProjectBox showAll={showAll} count={count} />
                        <Button btnData={count >= totalProjects ? "Show Less" : "View More"} handleBtn={handleBtn} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;
