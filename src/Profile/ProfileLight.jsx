import { FaTwitter } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { HiCake } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from "../Footer/Footer";
function Profile(){
    return(
        <>
        <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-[#F8F9FA]">
            <div className="h-[85vh] w-[50vw] ">
                <div className="h-[42%] bg-[#D1E6FA] relative">
                <div className="flex items-center justify-between h-[26vh] w-[50vw] absolute top-40 px-10">
                    <div className="h-[100%] w-[26vh] rounded-full border-10 border-solid border-slate-50">
                        <img src="https://th.bing.com/th/id/OIP.0DwUOybdwSMZxyBjCYED3AHaJ3?rs=1&pid=ImgDetMain"
                 alt="" className="object-cover object-center h-[100%] w-[100%] rounded-full"/></div>
                 <button className="px-4 py-2 rounded-full bg-[#CC0088] text-[#F8F9FA] flex items-center justify-center gap-2 mt-[8vh]">
                    <p className="bold text-[2.6vh] font-extrabold  ">Follow</p> <FaTwitter className="size-5" /></button>
                 </div>
                </div>
                <div className="h-[55%] w-[100%] px-8 py-24" >
                    <h1 className="text-5xl roboto-bold text-[#090f14] mb-2">Siddhi Singh </h1>
                    <p className="text-[15px] basic text-[#515254]">Brings idea to life with code..!✨</p>
                    <p className="text-[14px] basic text-[#515254]">Frontend Developer   | Freelance Coder | Diploma Student at Government Girls Polytechnic, Ballia </p>
                    <div className="flex items-start justify-start gap-4 ">
                        <div className="flex items-center justify-center basic gap-1 text-[#515254] "><PiStudentFill className="size-5"/> <span className="basic">Student</span></div> 
                        <div className="flex items-center justify-center basic gap-1 text-[#515254]"><HiCake className="size-5"/> <span>October 18th</span></div>  
                        <div className="flex items-center justify-center basic gap-1 text-[#515254]"><SlCalender className="size-5"/> <span>Joined Jan 11</span></div>

                        </div>
                        <div className="mt-10 text-center flex items-center justify-center flex-col gap-2">
                            <p className="text-[15px] basic text-[#090f14]">Keep up to date with my projects. Just do follow.</p>
                            <div className="flex items-center justify-start gap-2 text-[#515254]"><FaYoutube className="size-5 text-[#495057]"/>
                            <AiFillInstagram className="size-5 text-[#495057]"/> <FaLinkedin className="size-5 text-[#495057]"/> 
                            <FaGithub className="size-5 text-[#495057]"/><FaTwitter className="size-5 text-[#495057]"/></div>
                        </div>

                </div>
            </div>

        </div>
        </>
    )
}
export default Profile
