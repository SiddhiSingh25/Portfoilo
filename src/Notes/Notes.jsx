import ProjectNote from "./ProjectNote"
import Button from "../Common/Button"
import { useEffect, useState } from "react"
function Notes() {
    let [projectCount, setProjectCount] = useState(4);
    let [showPr, setShowPr] = useState(false);
    let count = 8;
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
            <div className="min-h-[100vh] w-[100vw] md:py-10 md:px-28 flex items-center justify-center flex-col py-4 px-5">
                <h1 className="text-4xl text-center roboto-bold text-lightModeText  dark:text-[#E6F1FF]  mb-5 md:mb-0 mt-20" style={{ textShadow: "1px 1px 5px #aaa" }}>Other Noteworthy Projects</h1>
                <div className="h-[90%] md:w-[88%] w-[100%] md:px-16 md:py-10 px-6 py-10 flex items-start justify-start flex-wrap gap-10">
                <ProjectNote showPr={showPr} projectCount={projectCount}/>
                <Button btnData={getValue()}  handleBtn={handleBtn} />
                </div>
            </div>
        </>
    )
}
export default Notes