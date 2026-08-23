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
                className="min-h-screen w-full py-12 md:py-20 px-4 sm:px-8 md:px-16 flex items-center justify-center flex-col"
                id="contact"
            >
                <div className="w-full max-w-2xl flex items-center justify-center mb-6">
                    <Heading count="05." title="Get In Touch" />
                </div>

                <div className="w-full max-w-2xl rounded-lg border-2 border-lightModeHeading dark:border-darkModeHeading p-6 sm:p-10 flex items-center justify-center flex-col gap-6 shadow-md bg-lightModeBox/50 dark:bg-[#172A45]/50">
                    <div className="w-full flex flex-col gap-4 text-center">
                        <p className="text-base sm:text-lg roboto text-lightModeText dark:text-darkModeText leading-relaxed">
                            Whether you need a cross-platform mobile app with <strong>React Native</strong>, a modern web app, or have a freelance project in mind, my inbox is always open!
                        </p>
                        <div className="text-sm sm:text-base roboto text-lightModeText dark:text-darkModeText flex flex-col gap-1 leading-relaxed">
                            <p>📧 <strong>Email:</strong> <LinkText text="singhsiddhi960@gmail.com" link="mailto:singhsiddhi960@gmail.com" /></p>
                            <p>📱 <strong>Phone:</strong> +91 8303638706</p>
                            <p>📍 <strong>Location:</strong> Noida (Sector 63), Uttar Pradesh</p>
                        </div>
                        <p className="text-sm sm:text-base roboto text-lightModeText dark:text-darkModeText">
                            Connect on <LinkText text="LinkedIn" link="https://www.linkedin.com/in/siddhi-singh07/" />, 
                            <LinkText text="GitHub" link="https://github.com/SiddhiSingh25" />, or 
                            <LinkText text="Twitter" link="https://twitter.com/SiddhiSingh07" />.
                        </p>
                    </div>

                    <button
                        className="mt-2 px-8 py-3.5 border-2 border-solid border-lightModeHeading dark:border-darkModeHeading rounded-md flex items-center justify-center text-lightModeHeading dark:text-darkModeHeading hover:bg-lightModeHeading hover:text-white dark:hover:bg-[#64FFDA] dark:hover:text-[#0A192F] transition-all duration-300 ease-in-out text-base sm:text-lg font-semibold shadow-sm"
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
