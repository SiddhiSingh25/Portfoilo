import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { HiCake } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import Footer from "../Footer/Footer";
import pro from '../assets/pro.jpg';
import image from '../assets/profile-avatar.jpg';
import ProfileNav from "./ProfileNav";
import Banner from "../assets/Banner.png"
import Message from "../Contact/Message";
import './Profile.css'
function Profile() {
    return (
        <>
            <ProfileNav />
            <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 md:py-16 bg-lightModeBg dark:bg-[#0A192F] profileNavBtm">
                <div className="w-full max-w-3xl flex flex-col rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-lightModeBox dark:bg-[#172A45] shadow-lg">
                    {/* Banner */}
                    <div className="h-40 sm:h-52 bg-lightModeBg dark:bg-[#18263E] relative bg-cover bg-center banner">
                        <div className="flex items-end justify-between w-full px-6 absolute -bottom-10 sm:-bottom-12">
                            <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-solid border-lightModeText dark:border-[#2aab8d] overflow-hidden shadow-md bg-gray-900">
                                <img src={image} alt="Siddhi Singh Profile" className="object-cover object-top h-full w-full rounded-full"/>
                            </div>
                            <a 
                                href="https://twitter.com/SiddhiSingh07" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-4 py-2 rounded-full dark:bg-[#64FFDA] bg-lightModeHeading text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                            >
                                <span className="text-sm font-bold dark:text-[#18263E] text-white">Follow</span>
                                <FaTwitter className="size-4 dark:text-[#18263E] text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="pt-14 sm:pt-16 pb-8 px-6 sm:px-10 flex flex-col gap-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl roboto-bold text-lightModeText dark:text-[#64FFDA] mb-1">Siddhi Singh</h1>
                            <p className="text-sm sm:text-base basic dark:text-darkModeText text-lightModeText font-medium">Bringing ideas to life with code & modern mobile apps! ✨</p>
                            <p className="text-xs sm:text-sm basic dark:text-[#8892B0] text-gray-600 mt-1">
                                React Native Developer @ Macreel Infosoft | B.Tech CSE (Data Science) | Freelance Developer
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm pt-2">
                            <div className="flex items-center gap-1.5 basic dark:text-darkModeText text-lightModeText">
                                <PiStudentFill className="size-4 text-lightModeHeading dark:text-[#64FFDA]" /> 
                                <span>B.Tech CSE (Data Science)</span>
                            </div>
                            <div className="flex items-center gap-1.5 basic dark:text-darkModeText text-lightModeText">
                                <HiCake className="size-4 text-lightModeHeading dark:text-[#64FFDA]" /> 
                                <span>Noida, UP</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-center justify-center gap-3">
                            <p className="text-xs sm:text-sm basic text-lightModeHeading dark:text-[#64FFDA] font-semibold">Keep up to date with my projects. Follow on social media:</p>
                            <div className="flex items-center justify-center gap-6 text-[#8892B0]">
                                <a href="https://www.youtube.com/@college-insiders" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA] p-1">
                                    <FaYoutube className="size-5 sm:size-6" />
                                </a>
                                <a href="https://www.instagram.com/siddhyy_here" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA] p-1">
                                    <AiFillInstagram className="size-5 sm:size-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/siddhi-singh07/" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA] p-1">
                                    <FaLinkedin className="size-5 sm:size-6" />
                                </a>
                                <a href="https://github.com/SiddhiSingh25" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA] p-1">
                                    <FaGithub className="size-5 sm:size-6" />
                                </a>
                                <a href="https://twitter.com/SiddhiSingh07" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA] p-1">
                                    <FaTwitter className="size-5 sm:size-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Profile;
