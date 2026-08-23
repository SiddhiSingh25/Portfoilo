import { useState } from 'react';
import Heading from "../Common/Heading";
import LinkText from "../Common/LinkText";
import { NavLink } from 'react-router-dom';

function Contact() {
    const [btnData, setBtnData] = useState("Say Hello / Hire Me");

    const handleBtn = () => {
        window.location.href = "mailto:singhsiddhi960@gmail.com?subject=Freelance%20Project%20Inquiry"; // Opens email client
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
                    <div className="w-[100%] flex items-start justify-start flex-wrap gap-6 md:gap-8 text-center">
                        <p className="md:text-[16px] text-[15px] roboto text-lightModeText dark:text-darkModeText w-full">
                            Whether you need a mobile app with <strong>React Native</strong>, a modern web app, or have a freelance project in mind, my inbox is always open!
                        </p>
                        <p className="md:text-[16px] text-[15px] roboto text-lightModeText dark:text-darkModeText w-full">
                            📧 <strong>Email:</strong> <LinkText text="singhsiddhi960@gmail.com" link="mailto:singhsiddhi960@gmail.com" /><br/>
                            📱 <strong>Phone:</strong> +91 8303638706<br/>
                            📍 <strong>Location:</strong> Noida (Sector 63), Uttar Pradesh
                        </p>
                        <p className="md:text-[16px] text-[15px] roboto text-lightModeText dark:text-darkModeText w-full">
                            Connect on <LinkText text="LinkedIn" link="https://www.linkedin.com/in/siddhi-singh07/" />, 
                            <LinkText text="GitHub" link="https://github.com/SiddhiSingh25" />, or 
                            <LinkText text="Twitter" link="https://twitter.com/SiddhiSingh07" />.
                        </p>
                    </div>

                    <button
                        className="px-6 py-3 border-[.01rem] border-solid border-lightModeHeading dark:border-darkModeHeading rounded-[3px] flex items-center justify-center text-lightModeHeading dark:text-darkModeHeading hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out text-lg font-semibold"
                        onClick={handleBtn}
                    >
                        {btnData}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Contact;
