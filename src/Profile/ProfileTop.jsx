import { FaTwitter } from "react-icons/fa";
function ProfileTop(){
    return(
        <>
         <div className="h-[85vh] w-[50vw] border-2 border-solid border-r-red-50 ">
                <div className="h-[40%] bg-slate-400 relative">
                <div className="flex items-center justify-between h-[26vh] gap-2 border-2 border-solid border-red-300 w-[50vw] absolute top-36 px-5">
                    <div className="h-[100%] w-[26vh] rounded-full border-10 border-solid border-slate-50">
                        <img src="https://th.bing.com/th/id/OIP.0DwUOybdwSMZxyBjCYED3AHaJ3?rs=1&pid=ImgDetMain"
                 alt="" className="object-cover object-center h-[100%] w-[100%] rounded-full"/></div>
                 <button className="px-6 py-2 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center gap-2 mt-16">
                    <p className="bold text-xl font-extrabold  ">Follow</p> <FaTwitter className="size-6" /></button>
                 </div>
                </div>
            </div>
        </>
    )
}
export default ProfileTop