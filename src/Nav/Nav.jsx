import { useState, useEffect } from 'react';
import ProfileImg from '../assets/profile-avatar.jpg';
import { NavLink } from 'react-router-dom';
import ThemeChanger from '../ThemeChanger';
import './Nav.css';

function Nav() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev);
    };

    // Close mobile menu when screen resizes to desktop breakpoint
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop <= 10) {
                // Always visible at the very top of the page
                setIsNavVisible(true);
            } else if (currentScrollTop > lastScrollTop) {
                // Scrolling down -> hide navbar
                setIsNavVisible(false);
                setMobileMenuOpen(false);
            } else {
                // Scrolling up (from bottom to top) -> show sticky navbar
                setIsNavVisible(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const navLinks = [
        { name: "HOME", href: "#home" },
        { name: "ABOUT", href: "#about" },
        { name: "PROJECTS", href: "#projects" },
        { name: "EDUCATION", href: "#education" },
        { name: "TESTIMONIALS", href: "#testimonials" },
        { name: "CONTACT", href: "#contact" }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full h-16 md:h-20 flex items-center justify-center bg-white dark:bg-darkModeBg z-[999] transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='h-full navBorder w-[90%] max-w-7xl flex items-center justify-between border-b-[0.01rem] border-t-0 border-x-0 border-solid border-lightModeHeading/20 dark:border-darkModeHeading/20'>

                    {/* Logo */}
                    <div className="logo shrink-0 -ml-5 sm:-ml-5 md:-ml-6">
                        <NavLink to="/" className='flex items-center hover:opacity-80 transition-opacity'>
                            <img src="/lightLogo.png" alt="Siddhyy Logo" className="h-32 sm:h-36 md:h-40 w-auto dark:hidden block object-contain object-left" />
                            <img src="/darkLogo.png" alt="Siddhyy Logo" className="h-32 sm:h-36 md:h-40 w-auto dark:block hidden object-contain object-left" />
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center space-x-3 lg:space-x-6'>
                        {navLinks.map((elm, idx) => (
                            <div key={idx} className='text-[13px] lg:text-[14px] flex items-center justify-center space-x-1 link py-1'>
                                <span className='text-lightModeHeading dark:text-darkModeHeading font-semibold text-xs'>0{idx + 1}.</span>
                                <a className='text-lightModeText font-medium dark:text-darkModeText hover:text-lightModeHeading dark:hover:text-darkModeHeading transition-colors' href={elm.href}>{elm.name}</a>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Right Actions (Dark Mode Toggle & Profile) */}
                    <div className='hidden md:flex items-center justify-center gap-3 shrink-0'>
                        <ThemeChanger className="flex" />
                        <NavLink to="/profile" className='profile group flex items-center justify-center'>
                            <img src={ProfileImg} alt="Profile" className='h-10 w-10 md:h-11 md:w-11 rounded-full object-cover object-top border-2 border-solid border-lightModeHeading dark:border-darkModeHeading transition-all group-hover:scale-105' />
                        </NavLink>
                    </div>

                    {/* Mobile Controls (Theme, Profile, Animated Hamburger) */}
                    <div className='md:hidden flex items-center justify-end gap-2 sm:gap-3 shrink-0'>
                        <ThemeChanger className="flex" />
                        <NavLink to="/profile" className="profile flex items-center justify-center">
                            <img src={ProfileImg} alt="Profile" className='h-10 w-10 rounded-full object-cover object-top border-2 border-solid border-lightModeHeading dark:border-darkModeHeading transition-all hover:scale-105' />
                        </NavLink>
                        <button
                            onClick={toggleMobileMenu}
                            className='p-2 rounded-lg text-lightModeHeading dark:text-darkModeHeading hover:bg-lightModeHeading/10 dark:hover:bg-darkModeHeading/10 transition-colors focus:outline-none'
                            aria-label="Toggle navigation menu"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                                <span className={`w-6 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                                <span className={`w-6 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out my-[5px] ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                                <span className={`w-6 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                            </div>
                        </button>
                    </div>

                </div>

                {/* Mobile Menu Dropdown with 100% screen height, white bg, and high z-index */}
                <div className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white dark:bg-darkModeBg flex flex-col items-center justify-center space-y-4 py-8 shadow-2xl z-[998] transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    {navLinks.map((elm, idx) => (
                        <a
                            key={idx}
                            href={elm.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className='w-full text-center text-lightModeText dark:text-darkModeText text-base font-semibold flex items-center justify-center space-x-2 py-3 hover:bg-lightModeHeading/10 dark:hover:bg-darkModeHeading/10 transition-colors'
                        >
                            <span className='text-lightModeHeading dark:text-darkModeHeading text-sm font-semibold'>0{idx + 1}.</span>
                            <span>{elm.name}</span>
                        </a>
                    ))}
                </div>
            </nav>
            {/* Layout spacer so page content is not overlapped when fixed at top */}
            <div className="h-16 md:h-20 w-full pointer-events-none"></div>
        </>
    );
}

export default Nav;
