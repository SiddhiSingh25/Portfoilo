import Profile from "../assets/profile-avatar.jpg";
import { FaHeart } from "react-icons/fa";

function Right() {
    return (
        <div className="right md:w-[40%] w-full flex items-center justify-center relative py-2">
            {/* Theme Polaroid Photo Card */}
            <div className="w-full max-w-[370px] sm:w-[340px] md:w-[370px] bg-white dark:bg-[#172A45] border border-gray-200/80 dark:border-gray-700/60 p-3 sm:p-4 rounded-2xl shadow-xl dark:shadow-2xl transition-all duration-300">
                {/* Photo Container with Theme Tint Filter & Shadow */}
                <div className="w-full aspect-[4/4.5] sm:h-[360px] md:h-[390px] rounded-xl overflow-hidden relative group shadow-md">
                    <img
                        src={Profile}
                        alt="Siddhi Singh Profile"
                        className="w-full h-full object-cover object-top rounded-xl transition-all duration-500 filter brightness-95 contrast-105 group-hover:scale-105 group-hover:brightness-100"
                    />
                    {/* Theme Tint Overlay Filter (fades out on hover) */}
                    <div className="absolute inset-0 bg-lightModeHeading/25 dark:bg-[#64FFDA]/20 mix-blend-multiply rounded-xl transition-all duration-300 group-hover:opacity-0 pointer-events-none" />
                </div>

                {/* Bottom Card Caption */}
                <div className="pt-3 px-1.5 flex items-center justify-center">
                    <span className="text-xs text-center sm:text-sm font-medium text-gray-600 dark:text-[#8892B0] tracking-wide select-none font-mono flex items-center justify-center gap-1.5">
                        Heyy, smileee!  <FaHeart className="text-red-500 inline-block size-3.5 animate-pulse" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Right;
