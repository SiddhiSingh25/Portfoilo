import { useGSAP } from "@gsap/react"
import Button from "../Common/Button"
import LinkText from "../Common/LinkText"
import gsap from "gsap"
import { animate } from "../Animate"
function Left() {
    animate()
    return (
        <>
            <div className="left h-[100%] w-[100%] flex items-start justify-between flex-col md:py-36 py-2  md:px-7 px-0"  >
                <div className="h-[40%] w-[100%] mb-7 md:mb-0">
                    <h1 className="dark:text-darkModeHeading text-lightModeHeading mb-2 md:gap-0 heading1">Namaste, World! I am</h1>
                    <h1 className="md:text-7xl text-6xl  dark:text-darkmodeSpan text-lightModeText  roboto-bold heading2">Siddhi Singh</h1>
                    <h1 className="md:text-[8vh] text-5xl dark:text-darkModeText text-lightmodeSpan roboto-bold leading-none heading3 mt-2">I build mobile apps & web experiences.</h1>
                </div>
                <div className="h-[50%] w-[100%] flex items-start justify-center flex-col gap-2 md:gap-0 mb-7 md:mb-4">
                    <h1 className="dark:text-darkModeText text-lightModeText roboto md:text-[2.4vh] text-[2.1vh] leading-9 lines">
                        I'm a <LinkText text="React Native & Web Developer" link="https://github.com/SiddhiSingh25" /> currently working at <LinkText text="Macreel Infosoft" link="https://macreel.co.in/" /> in Noida.
                    </h1>
                    <h1 className="dark:text-darkModeText text-lightModeText roboto md:text-[2.4vh] text-[2.1vh] leading-9 lines">
                        Pursuing <LinkText text="B.Tech in CSE (Data Science)" link="#education" /> & crafting high-performance digital products for clients.
                    </h1>
                    <h1 className="dark:text-darkModeText text-lightModeText roboto md:text-[2.4vh] text-[2.1vh] leading-9 lines">
                        Full time working proffesional & part time Freelancer.
                    </h1>
                </div>
                <a href="#contact">
                    <Button btnData="Hire Me for Freelance" className="button" />
                </a>
            </div>
        </>
    )
}
export default Left

/**
 * 
        darkModeBg: '#0A192F', // Custom dark mode background (e.g., dark blue)
        darkModeHeading: '#64FFDA', 
        darkModeText: "#8892B0",
        ,// Custom dark mode text color (e.g., light gray)
        lightModeBg: '#F8F9FA',  // Custom light mode background (optional)
        lightModeText: '#030507',
        lightModeHeading : "#CC0088"
 */