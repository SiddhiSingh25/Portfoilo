import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { HiCake } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import Footer from "../Footer/Footer";
import pro from '../assets/pro.jpg';
import image from '../assets/newImg.jpg';
import ProfileNav from "./ProfileNav";
import Banner from "../assets/Banner.png"
import Message from "../Contact/Message";
import './Profile.css'
function Profile() {
    return (
        <>
            <ProfileNav />
            <div className="md:h-[100vh] h-[90vh] w-[100vw] flex items-center justify-center px-7 py-3 md:py-0 md:px-0 bg-lightModeBg dark:bg-[#0A192F] profileNavBtm">
                <div className="h-[85vh] w-[100%] md:w-[50vw]">
                <div className="md:h-[42%] h-[30%] bg-lightModeBg dark:bg-[#18263E] opacity-3 relative bg-cover bg-center banner">
                        <div className="flex items-center justify-between md:h-[26vh] w-[100%] md:w-[50vw] top-[10.25rem] absolute md:top-40 md:px-10">
                            <div className="md:h-[100%] h-[32vw]  w-[32vw] md:w-[26vh] rounded-full border-10 border-solid border-lightModeText dark:border-[#2aab8d]">
                                <img src={image} alt="" className="object-cover object-center h-[100%] w-[100%] rounded-full"/>
                            </div>
                            <button className="px-4 py-2 rounded-full dark:bg-[#64FFDA] bg-lightModeHeading text-[#F8F9FA] flex items-center justify-center gap-2 mt-[8vh]">
                                <a href="https://twitter.com/SiddhiSingh07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <p className="bold text-[2.6vh] font-extrabold dark:text-[#18263E] text-lightModeBg">Follow</p>
                                    <FaTwitter className="size-5 dark:text-[#18263E] text-lightModeBg" />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="h-[55%] w-[100%]  md:px-8 px-2 py-24 md:py-24">
                        <h1 className="text-5xl roboto-bold text-lightModeText dark:text-[#64FFDA] mb-2">Siddhi Singh</h1>
                        <p className="text-[15px] basic dark:text-darkModeText text-lightModeText">Brings idea to life with code..!✨</p>
                        <p className="text-[14px] basic dark:text-darkModeText text-lightModeText">
                            Frontend Developer | Freelance Coder | Diploma Student at Government Girls Polytechnic, Ballia
                        </p>
                        <div className="flex items-start justify-start gap-4">
                            <div className="flex items-center justify-center basic gap-1 dark:text-darkModeText text-lightModeText">
                                <PiStudentFill className="size-5" /> <span className="basic">Student</span>
                            </div>
                            <div className="flex items-center justify-center basic gap-1 dark:text-darkModeText text-lightModeText">
                                <HiCake className="size-5" /> <span>October 18th</span>
                            </div>
                            <div className="flex items-center justify-center basic gap-1 dark:text-darkModeText text-lightModeText">
                                <SlCalender className="size-5" /> <span>Joined Jan 11</span>
                            </div>
                        </div>
                        <div className="mt-10 text-center flex items-center justify-center flex-col gap-3">
                            <p className="text-[15px] basic text-lightModeHeading dark:text-[#64FFDA] ">Keep up to date with my projects. Just do follow.</p>
                            <div className="flex items-center justify-start gap-4 text-[#8892B0]">
                                <a href="https://www.youtube.com/@college-insiders" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading  dark:hover:text-[#64FFDA]">
                                    <FaYoutube className="size-5" />
                                </a>
                                <a href="https://www.instagram.com/siddhyy_here" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA]">
                                    <AiFillInstagram className="size-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/siddhi-singh07/" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA]">
                                    <FaLinkedin className="size-5" />
                                </a>
                                <a href="https://github.com/SiddhiSingh25" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA]">
                                    <FaGithub className="size-5" />
                                </a>
                                <a href="https://twitter.com/SiddhiSingh07" target="_blank" rel="noopener noreferrer" className="dark:text-[#fffdfd] text-lightModeText transition-colors hover:text-lightModeHeading dark:hover:text-[#64FFDA]">
                                    <FaTwitter className="size-5" />
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
