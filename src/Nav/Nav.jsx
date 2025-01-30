import { useState, useEffect } from 'react';
import ProfileImg from '../assets/newImg.jpg';
import { NavLink } from 'react-router-dom';
import ThemeChanger from '../ThemeChanger';
import './Nav.css';

function Nav() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setIsNavVisible(false);
            } else {
                // Scrolling up
                setIsNavVisible(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <nav className={`sticky top-0 h-[10.8vh] w-full flex items-center justify-center bg-lightModeBg dark:bg-darkModeBg z-50 transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='h-full navBorder w-[88%] flex items-center justify-between border-b-[0.01rem] border-t-transparent border-l-transparent border-r-transparent dark:border-t-transparent dark:border-l-transparent dark:border-r-transparent border-solid border-lightModeHeading dark:border-darkModeHeading'>
                
                {/* Logo */}
                <div className="logo">
                    <h1 className='text-lightModeHeading dark:text-darkModeHeading text-xl'>Siddhyy</h1>
                </div>

                {/* Mobile Menu Toggle and Profile */}
                <div className='md:hidden flex items-center justify-between gap-2'>
                    <ThemeChanger className="flex md:hidden"/>
                    <NavLink to="/profile" className="profile">
                        <div className='px-2 py-1 border-[.01rem] border-none rounded-[3px] flex items-center justify-center'>
                            <img src={ProfileImg} alt="Profile" className='h-[4vh] w-[4vh] rounded-full object-cover border-2 border-lightModeHeading dark:border-darkModeHeading' />
                        </div>
                    </NavLink>
                    <button onClick={toggleMobileMenu} className='text-lightModeHeading dark:text-darkModeHeading'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center space-x-4'>
                    {["HOME", "ABOUT", "PROJECTS", "EDUCATION", "CONTACT"].map((elm, idx) => (
                        <div key={idx} className='text-[13px] flex items-center justify-center link'>
                            <p className='text-lightModeHeading dark:text-darkModeHeading'>0{idx+1}.</p>
                            <a className='text-lightModeText dark:text-darkModeText' href={`#${elm.toLowerCase()}`}>{elm}</a>
                        </div>
                    ))}
                </div>

                {/* Dark Mode Toggle */}
                <div className='md:flex items-center justify-center gap-2 hidden '>
                    <ThemeChanger className="hidden md:flex"/>
                    {/* Profile Section */}
                    <NavLink to="/profile" className='hidden md:flex profile'>
                        <div className='px-2 py-1 border-[.01rem] border-lightModeHeading dark:border-darkModeHeading border-solid rounded-[3px] flex items-center justify-center'>
                            <h1 className='text-[2.3vh] font-light mr-2 text-lightModeHeading dark:text-darkModeHeading'>Profile</h1>
                            <img src={ProfileImg} alt="Profile" className='h-[3.8vh] w-[3.8vh] rounded-full object-cover border-2 border-lightModeHeading dark:border-darkModeHeading' />
                        </div>
                    </NavLink>
                </div>
                
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='absolute top-[10.8vh] left-0 w-full bg-lightModeBg dark:bg-darkModeBg flex flex-col items-center z-50 transition-transform duration-300'>
                    {["HOME", "ABOUT", "PROJECTS", "EDUCATION", "CONTACT"].map((elm, idx) => (
                        <div key={idx} className='text-lightModeText dark:text-darkModeText text-sm flex items-center space-x-2 py-4'>
                            <p className='text-lightModeHeading dark:text-darkModeHeading'>0{idx+1}.</p>
                            <a className='text-lightModeText dark:text-darkModeText ' href={`#${elm.toLowerCase()}`}>{elm}</a>
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Nav;
