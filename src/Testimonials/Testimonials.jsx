import React, { useState, useEffect } from 'react';
import Heading from '../Common/Heading';
import testimonialIcon from '../assets/testimonial_icon.jpg';


const testimonialsData = [
    {
        id: 1,
        clientType: 'Direct Clients',
        logoType: 'A',
        logoColor: '#6B46C1',
        clientName: 'Anjani Kumar Rai',
        schoolWebsite: 'School Website',
        liveUrl: 'https://www.aisgazipur.in/',
        profileImg: testimonialIcon,
        highlightQuote: `"Very good work and support throughout the project."`,
        quote: `We are very happy with the website. The design is clean and professional, and all the changes we asked for were done properly. Siddhi was also very supportive whenever we had any doubt or wanted to make a change. Overall, a very good experience.`,
        author: '— Anjani Kumar Rai',
        stars: 5
    },
    {
        id: 2,
        clientType: 'Direct Clients',
        logoType: 'S',
        logoColor: '#14A800',
        clientName: 'Sunny Kumar',
        schoolWebsite: 'Dance Academy Website',
        liveUrl: 'https://dance-academy-psi.vercel.app/',
        profileImg: testimonialIcon,
        highlightQuote: `"Really happy with the website and the overall work."`,
        quote: `Siddhi understood what we wanted for our dance academy website and made it look very nice and professional. She was always available whenever we needed any changes or had any questions. The website is easy to use and looks great on mobile also. Really satisfied with the work.`,
        author: '— Sunny Kumar',
        stars: 5
    },

];
function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('next');
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance threshold in px
    const minSwipeDistance = 50;

    const handlePrev = () => {
        setSlideDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSlideDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            handleNext();
        } else if (isRightSwipe) {
            handlePrev();
        }
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex, isPaused]);

    const activeItem = testimonialsData[currentIndex]; return (
        <section id="testimonials" className="w-full py-10 xs:py-12 sm:py-16 md:py-20 px-3 xs:px-4 sm:px-8 md:px-16 flex flex-col items-center justify-center bg-[#FDFBF7] dark:bg-darkModeBg transition-colors duration-300 overflow-hidden relative min-h-[460px] xs:min-h-[500px] sm:min-h-[550px] select-none">
            {/* Vertical Striped Background Overlay matching reference image */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30 sm:opacity-45 dark:opacity-10 z-0"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #DCE9F6 0px, #DCE9F6 75px, transparent 75px, transparent 150px)'
                }}
            />

            <div className="w-full max-w-5xl flex flex-col items-center justify-center relative z-10 px-1 sm:px-0">

                {/* Section Header */}
                <div className="w-full mb-2 sm:mb-6">
                    <Heading count="04." title="Testimonials" />
                </div>

                {/* Main Carousel Area */}
                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    className="relative w-full flex flex-col md:flex-row items-center justify-between py-2 sm:py-6 touch-pan-y"
                >
                    {/* Desktop Left Arrow (hidden on mobile, visible on md+) */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="hidden md:flex p-2.5 lg:p-3 text-gray-800 dark:text-[#64FFDA] hover:scale-125 active:scale-95 transition-all cursor-pointer z-20 shrink-0"
                    >
                        <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-4 md:w-12 md:h-5 lg:w-14 lg:h-6">
                            <path d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116" />
                            <path d="M42.8633 9.18125L3.37868 9.18125" />
                        </svg>
                    </button>

                    {/* Active Main Testimonial Content */}
                    <div
                        key={`${activeItem.id}-${currentIndex}`}
                        className={`w-full max-w-2xl sm:max-w-3xl mx-auto px-1 xs:px-3 sm:px-6 flex flex-col items-center text-center gap-3.5 xs:gap-4 sm:gap-6 ${slideDirection === 'next' ? 'animate-slide-right' : 'animate-slide-left'
                            }`}
                    >
                        {/* Top Info Bar: Profile Avatar + Name | Project */}
                        <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 bg-white/80 dark:bg-[#172A45]/80 backdrop-blur-md px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-2xl xs:rounded-full border border-gray-200/80 dark:border-gray-700/80 shadow-sm max-w-[95%] xs:max-w-full transition-all duration-300">
                            {activeItem.profileImg && (
                                <img
                                    src={activeItem.profileImg}
                                    alt={activeItem.clientName}
                                    className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-[#251438] dark:border-[#64FFDA] shrink-0"
                                />
                            )}
                            <div className="flex items-center justify-center gap-1.5 xs:gap-2 flex-wrap text-xs sm:text-sm md:text-base">
                                <span className="roboto-bold text-[#251438] dark:text-darkModeHeading whitespace-nowrap">
                                    {activeItem.clientName}
                                </span>
                                {activeItem.schoolWebsite && (
                                    <>
                                        <span className="text-gray-400 dark:text-gray-500 font-normal select-none hidden xs:inline">|</span>
                                        <span className="roboto-medium text-gray-600 dark:text-gray-300">
                                            {activeItem.schoolWebsite}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Editorial Quote Block matching reference image */}
                        <div className="flex flex-col items-center gap-2.5 xs:gap-3 sm:gap-4 w-full">
                            {/* Highlight Serif Headline */}
                            <h3 className="font-cormorant text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1E1E1E] dark:text-[#E6F1FF] font-medium leading-tight sm:leading-snug tracking-tight max-w-2xl px-1 sm:px-2 break-words">
                                {activeItem.highlightQuote}
                            </h3>

                            {/* Full Paragraph Detail Quote */}
                            <p className="text-gray-800 dark:text-[#8892B0] font-sans text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed max-w-xl px-1 sm:px-2 font-normal break-words">
                                “{activeItem.quote}”
                            </p>
                        </div>

                        {/* Author Signature & Website Link */}
                        <div className="flex flex-col items-center gap-1 mt-0.5 sm:mt-1">
                            <span className="roboto-bold text-xs xs:text-sm sm:text-base text-[#251438] dark:text-darkModeHeading">
                                {activeItem.author}
                            </span>
                            {activeItem.liveUrl && (
                                <a
                                    href={activeItem.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] xs:text-xs sm:text-sm text-[#4A62B0] dark:text-[#64FFDA] hover:underline flex items-center gap-1 transition-colors mt-0.5"
                                >
                                    Visit Website ↗
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Desktop Right Arrow (hidden on mobile, visible on md+) */}
                    <button
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="hidden md:flex p-2.5 lg:p-3 text-gray-800 dark:text-[#64FFDA] hover:scale-125 active:scale-95 transition-all cursor-pointer z-20 shrink-0"
                    >
                        <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-4 md:w-12 md:h-5 lg:w-14 lg:h-6">
                            <path d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599" />
                            <path d="M1.19088 9.16982H40.6755" />
                        </svg>
                    </button>

                    {/* Mobile Navigation Arrows & Pagination Dots */}
                    <div className="flex md:hidden items-center justify-center gap-4 xs:gap-6 sm:gap-10 mt-5 xs:mt-6 sm:mt-8 z-20 w-full">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous Testimonial"
                            className="p-2.5 xs:p-3 min-w-[44px] min-h-[44px] text-gray-800 dark:text-[#64FFDA] hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/5 touch-manipulation"
                        >
                            <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-4 xs:w-9 xs:h-4.5 sm:w-10 sm:h-5">
                                <path d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116" />
                                <path d="M42.8633 9.18125L3.37868 9.18125" />
                            </svg>
                        </button>

                        {/* Pagination Dots indicator */}
                        <div className="flex items-center gap-1.5 xs:gap-2">
                            {testimonialsData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setSlideDirection(idx > currentIndex ? 'next' : 'prev');
                                        setCurrentIndex(idx);
                                    }}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${currentIndex === idx
                                        ? 'w-5 xs:w-6 bg-[#251438] dark:bg-[#64FFDA]'
                                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            aria-label="Next Testimonial"
                            className="p-2.5 xs:p-3 min-w-[44px] min-h-[44px] text-gray-800 dark:text-[#64FFDA] hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/5 touch-manipulation"
                        >
                            <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-4 xs:w-9 xs:h-4.5 sm:w-10 sm:h-5">
                                <path d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599" />
                                <path d="M1.19088 9.16982H40.6755" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;

