import ProjectNote from "./ProjectNote"
import Button from "../Common/Button"
import { useEffect, useState } from "react"
function Notes() {
    let [projectCount, setProjectCount] = useState(4);
    let [showPr, setShowPr] = useState(false);
    let count = 6;
    const handleBtn = (e)=>{
        if(showPr){
            setProjectCount(2);
            setShowPr(true);
            getValue();
        }
        else{
            setProjectCount(projectCount+2);
            setShowPr(false);
            getValue();
        }
    }
    let getValue = ()=>{
        return count > projectCount ? "View more" : "View less";
    }
    console.log(getValue)
    useEffect(()=>{
        getValue()
    }, projectCount)
    return (
        <>
            <div className="min-h-screen w-full py-12 md:py-20 px-4 sm:px-8 md:px-16 flex items-center justify-center flex-col">
                <h2 className="text-3xl sm:text-4xl text-center roboto-bold text-lightModeText dark:text-[#E6F1FF] mb-8 md:mb-12">
                    Other Noteworthy Projects
                </h2>
                <div className="w-full max-w-7xl flex items-center justify-center flex-col gap-10">
                    <ProjectNote showPr={showPr} projectCount={projectCount}/>
                    <Button btnData={getValue()} handleBtn={handleBtn} />
                </div>
            </div>
        </>
    )
}
export default Notes