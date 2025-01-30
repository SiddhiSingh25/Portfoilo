import { useState } from 'react';
import Heading from "../Common/Heading";
import LinkText from "../Common/LinkText";
import { NavLink } from 'react-router-dom';

function Contact() {
    const [btnData, setBtnData] = useState("Say Hello!!");

    const handleBtn = () => {
        window.location.href = "mailto:siddhisingh18102005@gmail.com"; // Opens the email client
    };

    return (
        <>
            <div
                className="md:min-h-[100vh] min-h-[70vh] w-[100vw] py-5 px-6 md:py-10 md:px-28 flex items-center justify-center flex-col"
                id="contact"
            >
                <h1
                    className="text-4xl text-center roboto-bold text-lightModeHeading dark:text-darkModeHeading w-[100%] md:w-[40%] mb-4"
                    style={{ textShadow: "1px 1px 5px #aaa" }}
                >
                    <Heading count="06. " title="Get in touch" />
                </h1>

                <div className="h-auto w-[100%] md:w-[50%] border-2 border-lightModeHeading dark:border-darkModeHeading border-solid px-6 md:px-16 py-10 flex items-center justify-start flex-wrap gap-6 md:gap-10 flex-col">
                    <div className="w-[100%] flex items-start justify-start flex-wrap gap-6 md:gap-10 text-center">
                        <p className="md:text-[16px] text-[15px] roboto text-lightModeText dark:text-darkModeText">
                            If you're looking for an intern or a freelancer, feel free to <LinkText text="email me" link="mailto:siddhisingh18102005@gmail.com" />!
                        </p>
                        <p className="md:text-[16px] text-[15px] roboto text-lightModeText dark:text-darkModeText">
                            Feel free to connect with me on <LinkText text="LinkedIn" link="https://www.linkedin.com/in/siddhi-singh07/" />, 
                            <LinkText text="Twitter" link="https://twitter.com/SiddhiSingh07" />, or 
                            <LinkText text="Instagram" link="https://www.instagram.com/siddhyy_here" /> for any opportunities or collaborations.
                        </p>
                        <p className="md:text-[16px] text-[15px] roboto text-lightModeText dark:text-darkModeText">
                            Looking forward to hearing from you! & thanks for scrolling all this way.
                        </p>
                    </div>

                    <NavLink to="/contact">
                    <button
                        className="px-4 py-3 border-[.01rem] border-solid border-lightModeHeading dark:border-darkModeHeading rounded-[3px] flex items-center justify-center text-lightModeHeading dark:text-darkModeHeading hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out"
                        onClick={handleBtn}
                    >
                        {btnData}
                    </button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Contact;
