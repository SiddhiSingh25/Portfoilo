{/*import { IoTriangle } from "react-icons/io5";
import Heading from "../Common/Heading";
import LinkText from "../Common/LinkText";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Left() {
    
    return (
        <>
            <div className="left h-[100%]  flex items-start justify-start md:w-[45%] w-[100%] flex-col my-3  px-8">
                <Heading count="01." title="About me"/>
                <div className="mt-16 ">
                <p className="text-[#8892B0] mb-5 roboto text-[2.4vh]">
                        Howdy! I'm <LinkText text="Siddhi Singh." link="https://github.com/SiddhiSingh25"/>
                        A web developer, who enjoys building, learning, and exploring things that live on the web.
                    </p>
                    <p className="text-[#8892B0] mb-5 roboto text-[2.4vh]">I’ve been coding for over a year and have built <LinkText text="27 frontend websites"/> for practice.</p>
                    <p className="text-[#8892B0] mb-5 roboto text-[2.4vh]">I’m in my <LinkText text="final year"/> of a diploma in IT, performing well <LinkText text="academically"/>. </p>
                </div>
                <div className="flex items-center justify-start flex-col ">
                    <p className="text-[#8892B0] mb-5">Here are a few technologies I love working on:</p>
                    <div className="md:h-[18vh] h-[12vh] px-5 flex items-start justify-center flex-col flex-wrap w-[100%] gap-2 mb-10 md:mb-0">
                        {["HTML", "CSS", "JavaScript", "React", "Java(Core)", "Tailwind", "GSAP", "Locomotive Scroll"].map((item) => (
                            <h1 key={item} className="flex items-center justify-start gap-x-2 gap-y-2"><IoTriangle className="text-[1vh] rotate-90 text-[#64FFDA]" /> <p className="text-[14px] Roboto text-[#8892B0]">{item}</p></h1>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Left

*/}
import { IoTriangle } from "react-icons/io5";
import Heading from "../Common/Heading";
import LinkText from "../Common/LinkText";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Left() {
  return (
    <div className="left h-[100%] flex items-start justify-start md:w-[45%] w-[100%] flex-col my-3 px-8">
      <Heading count="01." title="About me" className="title  mb-8" />
      <div className="mt-16">
        <p className="text-lightModeText  dark:text-[#D1D5DB] mb-5 roboto text-[2.4vh] heading1">
          Howdy! I'm <LinkText text="Siddhi Singh." link="https://github.com/SiddhiSingh25" />
          A web developer, who enjoys building, learning, and exploring things that live on the web.
        </p>
        <p className="text-lightModeText  dark:text-[#D1D5DB] mb-5 roboto text-[2.4vh] heading2">
          I’ve been coding for over a year and have built <LinkText text="27 frontend websites" /> for practice.
        </p>
        <p className="text-lightModeText  dark:text-[#D1D5DB] mb-5 roboto text-[2.4vh]">
          I’m in my <LinkText text="final year" /> of a diploma in IT, performing well <LinkText text="academically" />.
        </p>
      </div>
      <div className="flex items-center justify-start flex-col">
        <p className="text-[#454a59] dark:text-[#D1D5DB] mb-5">Here are a few technologies I love working on:</p>
        <div className="md:h-[18vh] h-[12vh] px-5 flex items-start justify-center flex-col flex-wrap w-[100%] gap-2 mb-10 md:mb-0">
          {["HTML", "CSS", "JavaScript", "React", "Java(Core)", "Tailwind", "GSAP", "Locomotive Scroll"].map((item) => (
            <div key={item} className="flex items-center justify-start gap-x-2 gap-y-2 skills-item">
              <IoTriangle className="text-[1vh] rotate-90 text-lightModeHeading dark:text-darkModeHeading" />
              <p className="text-[14px] Roboto text-lightModeText  dark:text-[#D1D5DB]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Left;
