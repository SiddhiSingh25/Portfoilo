import { IoTriangle } from "react-icons/io5";
import Heading from "../Common/Heading";
import LinkText from "../Common/LinkText";
import React from 'react';

function Left() {
  return (
    <div className="left flex items-start justify-start md:w-[55%] w-full flex-col my-3 px-2 sm:px-4 md:px-0">
      <Heading count="01." title="About me" className="title mb-8" />

      <div className="mt-4 space-y-4">
        <p className="text-lightModeText dark:text-[#D1D5DB] roboto text-sm sm:text-base leading-relaxed">
          I'm a <span className="font-bold text-gray-900 dark:text-[#E6F1FF]">20yo Developer</span> balancing a corporate career with my graduation and freelance on the side.
          {/* while building modern web experiences and learning something new every day. */}
        </p>

        <p className="text-lightModeText dark:text-[#D1D5DB] roboto text-sm sm:text-base leading-relaxed">
          I help <span className="font-semibold text-gray-900 dark:text-[#E6F1FF]">founders and small businesses turn their ideas into modern websites.</span>
          {/* — designing, building, and bringing them to life.  */}
          If you have an idea you'd like to build, <LinkText text="catch me on email" link="#contact" />.
        </p>

        <p className="text-lightModeText dark:text-[#D1D5DB] roboto text-sm sm:text-base leading-relaxed">
          Beyond coding, I love <span className="font-semibold text-gray-900 dark:text-[#E6F1FF]">reading books, creating videos, and exploring ideas around career, money, wellness, and personal growth.</span>
        </p>

        <p className="text-lightModeText dark:text-[#D1D5DB] roboto text-sm sm:text-base leading-relaxed">
          I'm figuring out my <span className="font-bold text-gray-900 dark:text-[#E6F1FF]">20s</span> — trying to build a life and a business I'm proud of, while documenting a little bit of the journey along the way.
        </p>

        <div className="pt-3 border-t border-gray-200/60 dark:border-gray-800/60 mt-4">
          <p className="font-bold text-gray-900 dark:text-[#E6F1FF] text-lg sm:text-xl mb-2">
            Want to work together?
          </p>
          <p className="text-lightModeText dark:text-[#D1D5DB] roboto text-sm sm:text-base leading-relaxed">
            Explore my work, check out my code on <LinkText text="GitHub" link="https://github.com/SiddhiSingh25" />, or <LinkText text="drop me an email" link="#contact" />. Let's turn an idea into something real.
          </p>
        </div>
      </div>

      {/* <div className="flex items-start justify-start flex-col w-full mt-6">
        <p className="text-[#454a59] dark:text-[#D1D5DB] mb-3 font-semibold text-sm sm:text-base">Technologies & tools I work with:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
          {["React Native", "React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Java (Core)", "GSAP", "REST APIs", "Git & GitHub"].map((item) => (
            <div key={item} className="flex items-center justify-start gap-2 skills-item">
              <IoTriangle className="text-xs rotate-90 text-lightModeHeading dark:text-darkModeHeading flex-shrink-0" />
              <p className="text-xs sm:text-sm Roboto text-lightModeText dark:text-[#D1D5DB] truncate">{item}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Left;
