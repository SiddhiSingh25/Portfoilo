import Heading from "../Common/Heading"
import Button from "../Common/Button"
import { useState } from "react";
import LinkText from '../Common/LinkText'
function FunFact() {
    const facts = [
        <>I'm a diploma student who survives on <LinkText text="caffeine"/> and <LinkText text="last-minute assignments"/> (thrives under pressure!).</>,
        <>As a programmer, I've mastered the art of breaking code and fixing it... mostly by <LinkText text="Googling"/>.</>,
        <>I’m a <LinkText text="gamer"/> who believes victory is only a few rage quits away.</>,
        <>I run a <LinkText text="YouTube channel"/> where I teach others how to study effectively... when I’m not procrastinating myself.</>,
        <>Cycling is my secret escape—until a <LinkText text="hill"/> shows up, and then it's my arch-nemesis.</>,
        <>I'm a race enthusiast who races anything from cycles to <LinkText text="Wi-Fi speed tests"/> (I'm fast, promise!).</>,
        <>Balancing <LinkText text="coding"/>, <LinkText text="gaming"/>, YouTube, and cycling? Easy! I just haven’t slept since 2020.</>
    ];
    let [randomFact, setRandomFact] = useState(facts[0]);
    let idx = 0;
    let handleBtn = (e) => {
        idx++;
        let randomIdx = Math.floor(Math.random() * facts.length);
        setRandomFact(facts[randomIdx]);
        console.log(idx)
    }
    return (
        <>
            <div className="h-[80vh] w-[100vw] flex items-center justify-center md:py-10 md:px-16 py-4 px-5 lg:px-6 lg:py-6 ">
                <div className="h-[90%] lg:h-[80%] w-[100%] md:w-[88%] flex items-start justify-center flex-col md:flex-row lg lg-[100%] lg:flex-col">
                    <div className="left w-[100%] md:w-[37%] h-[70%] my-3 flex items-start justify-start gap-8 flex-col lg:w-[90%] ">
                        <Heading count="02." title="Fun Fact" />
                        <Button btnData="Shuffle" handleBtn={handleBtn} />
                        <p className="text-lightModeText  dark:text-[#D1D5DB] mb-5 roboto text-[2.4vh]">{randomFact}</p>
                    </div>
                    <div className="md:w-[40%] h-[100%] lg:hidden"></div>
                </div>
            </div>
        </>
    )
}
export default FunFact