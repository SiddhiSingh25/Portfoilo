import { useGSAP } from "@gsap/react"
import Button from "../Common/Button"
import LinkText from "../Common/LinkText"
import gsap from "gsap"
import { animate } from "../Animate"
function Left() {
    animate()
    return (
        <>
            <div className="left w-full flex items-start justify-between flex-col py-6 md:py-12 md:px-4"  >
                <div className="w-full mb-6">
                    <h1 className="dark:text-darkModeHeading text-lightModeHeading text-sm sm:text-base font-semibold mb-2 heading1">Namaste, World! I am</h1>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl dark:text-darkmodeSpan text-lightModeText roboto-bold heading2 tracking-tight">Siddhi Singh</h1>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-darkModeText text-lightmodeSpan roboto-bold leading-tight heading3 mt-3">I build mobile apps & web experiences.</h1>
                </div>
                <div className="w-full flex items-start justify-center flex-col gap-3 mb-8">
                    <h1 className="dark:text-darkModeText text-lightModeText roboto text-base sm:text-lg leading-relaxed lines">
                        I'm a <LinkText text="React Native & Web Developer" link="https://github.com/SiddhiSingh25" /> currently working at <LinkText text="Macreel Infosoft" link="https://macreel.co.in/" /> in Noida.
                    </h1>
                    <h1 className="dark:text-darkModeText text-lightModeText roboto text-base sm:text-lg leading-relaxed lines">
                        Pursuing <LinkText text="B.Tech in CSE (Data Science)" link="#education" /> & crafting high-performance digital products for clients.
                    </h1>
                    <h1 className="dark:text-darkModeText text-lightModeText roboto text-base sm:text-lg leading-relaxed lines">
                        Full-time working professional & freelance developer.
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