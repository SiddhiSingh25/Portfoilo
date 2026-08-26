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
            <nav className={`fixed top-0 left-0 w-full h-16 md:h-20 flex items-center justify-center bg-lightModeBg/95 dark:bg-darkModeBg/95 backdrop-blur-md z-50 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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

                    {/* Mobile Controls (Theme, Profile, Hamburger) */}
                    <div className='md:hidden flex items-center justify-end gap-2 sm:gap-3 shrink-0'>
                        <ThemeChanger className="flex" />
                        <NavLink to="/profile" className="profile flex items-center justify-center">
                            <img src={ProfileImg} alt="Profile" className='h-10 w-10 rounded-full object-cover object-top border-2 border-solid border-lightModeHeading dark:border-darkModeHeading transition-all hover:scale-105' />
                        </NavLink>
                        <button
                            onClick={toggleMobileMenu}
                            className='p-1.5 rounded-lg text-lightModeHeading dark:text-darkModeHeading hover:bg-lightModeHeading/10 dark:hover:bg-darkModeHeading/10 transition-colors focus:outline-none'
                            aria-label="Toggle navigation menu"
                        >
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                ) : (
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className='md:hidden absolute top-[100%] left-0 w-full bg-lightModeBg/98 dark:bg-darkModeBg/98 backdrop-blur-lg flex flex-col items-center py-4 shadow-xl border-b border-t-0 border-x-0 border-lightModeHeading/10 dark:border-darkModeHeading/10 z-50 transition-all duration-300 animate-fadeIn'>
                        {navLinks.map((elm, idx) => (
                            <a
                                key={idx}
                                href={elm.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className='w-full text-center text-lightModeText dark:text-darkModeText text-sm font-medium flex items-center justify-center space-x-2 py-3 hover:bg-lightModeHeading/10 dark:hover:bg-darkModeHeading/10 transition-colors'
                            >
                                <span className='text-lightModeHeading dark:text-darkModeHeading text-xs font-semibold'>0{idx + 1}.</span>
                                <span>{elm.name}</span>
                            </a>
                        ))}
                    </div>
                )}
            </nav>
            {/* Layout spacer so page content is not overlapped when fixed at top */}
            <div className="h-16 md:h-20 w-full pointer-events-none"></div>
        </>
    );
}

export default Nav;
