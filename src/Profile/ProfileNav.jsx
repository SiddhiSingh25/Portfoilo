import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileImg from "../assets/profile-avatar.jpg";
import ThemeChanger from "../ThemeChanger";

function ProfileNav() {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNav(false);
        } else {
            // Scrolling up
            setShowNav(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 h-[10.8vh] w-full flex items-center justify-center bg-lightModeBg dark:bg-darkModeBg transition-transform duration-300 z-50 ${showNav ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className='h-[100%] w-[88%] border-[0.01rem] flex items-center justify-between border-t-transparent border-l-transparent border-r-transparent dark:border-t-transparent dark:border-l-transparent dark:border-r-transparent border-solid border-lightModeHeading dark:border-darkModeHeading'>
                <div className="logo">
                    <NavLink to="/" className='flex items-center hover:opacity-80 transition-opacity'>
                        <img src="/lightLogo.png" alt="Siddhyy Logo" className="h-8 md:h-10 w-auto dark:hidden block object-contain" />
                        <img src="/darkLogo.png" alt="Siddhyy Logo" className="h-8 md:h-10 w-auto dark:block hidden object-contain" />
                    </NavLink>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <ThemeChanger />
                    <NavLink to="/">
                        <div className='px-3 py-1 border-[.01rem] border-solid dark:border-[#64FFDA] border-lightModeHeading rounded-[3px] flex items-center justify-center' style={{ transition: "0.25s cubic-bezier(0.645, 0.045, 0.355, 1)" }}>
                            <h1 className='text-[2.3vh] font-light mr-2 leading-[1] text-lightModeHeading dark:text-[#64FFDA]'>Home</h1>
                            <img src={ProfileImg} alt="Profile" className='h-[3.8vh] w-[3.8vh] rounded-full object-cover object-top' />
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default ProfileNav;
