import React, { useState, useEffect } from 'react';
import Heading from '../Common/Heading';
import profile1 from '../assets/profile-avatar.jpg';
import profile2 from '../assets/pro.jpg';
import profile3 from '../assets/newImg.jpg';

const testimonialsData = [
    {
        id: 1,
        clientType: 'Direct Clients',
        logoType: 'M',
        logoColor: '#6B46C1',
        clientName: 'Alex H.',
        schoolWebsite: 'Client Website',
        liveUrl: 'https://www.aisgazipur.in/',
        profileImg: profile1,
        highlightQuote: `" - my website turned out better than I could have imagined!"`,
        quote: `Alex has been SO amazing to work with! She has been so helpful every time I have a question about my website. And my website turned out better than I could have imagined! Thank you so much!!`,
        author: '— Alex H.',
        stars: 5
    },
    {
        id: 2,
        clientType: 'Upwork',
        logoType: 'upwork',
        logoColor: '#14A800',
        clientName: 'Ziakas R.',
        schoolWebsite: 'Dance Academy Website',
        liveUrl: 'https://dance-academy-psi.vercel.app/',
        profileImg: profile2,
        highlightQuote: `"Mazen is incredible! True artistic talent and excellent communication throughout."`,
        quote: `I really feel like I can trust him during the entirety of the hire, and he constantly goes out of his way to make the work the best it can be.`,
        author: '— Ziakas R.',
        stars: 5
    },
    {
        id: 3,
        clientType: 'Direct Clients',
        logoType: 'N',
        logoColor: '#4A62B0',
        clientName: 'Elena M.',
        schoolWebsite: 'NestMart E-Commerce',
        liveUrl: 'https://nest-mart-five.vercel.app/',
        profileImg: profile3,
        highlightQuote: `"A rare developer who actually understands both high-level design aesthetics and rock-solid frontend execution!"`,
        quote: `Turned our complex requirements into a fast, responsive, and stunning web experience.`,
        author: '— Elena M.',
        stars: 5
    }
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

    const activeItem = testimonialsData[currentIndex];

    return (
        <section id="testimonials" className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 flex flex-col items-center justify-center bg-[#FDFBF7] dark:bg-darkModeBg transition-colors duration-300 overflow-hidden relative min-h-[500px] sm:min-h-[550px]">
            {/* Vertical Striped Background Overlay matching reference image */}
            <div
                className="absolute inset-0 pointer-events-none opacity-45 dark:opacity-10 z-0"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #DCE9F6 0px, #DCE9F6 75px, transparent 75px, transparent 150px)'
                }}
            />

            <div className="w-full max-w-5xl flex flex-col items-center justify-center relative z-10">

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
                    className="relative w-full flex flex-col md:flex-row items-center justify-between py-2 sm:py-6"
                >
                    {/* Desktop Left Arrow (hidden on mobile, visible on md+) */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="hidden md:flex p-3 text-gray-800 dark:text-[#64FFDA] hover:scale-125 active:scale-95 transition-all cursor-pointer z-20 flex-shrink-0"
                    >
                        <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-5 lg:w-14 lg:h-6">
                            <path d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116" />
                            <path d="M42.8633 9.18125L3.37868 9.18125" />
                        </svg>
                    </button>

                    {/* Active Main Testimonial Content */}
                    <div
                        key={`${activeItem.id}-${currentIndex}`}
                        className={`w-full max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-6 flex flex-col items-center text-center gap-4 sm:gap-6 ${
                            slideDirection === 'next' ? 'animate-slide-right' : 'animate-slide-left'
                        }`}
                    >
                        {/* Top Info Bar: Profile Avatar + Name | Project */}
                        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 bg-white/80 dark:bg-[#172A45]/80 backdrop-blur-md px-4 sm:px-5 py-2 rounded-full border border-gray-200/80 dark:border-gray-700/80 shadow-sm max-w-full">
                            {activeItem.profileImg && (
                                <img
                                    src={activeItem.profileImg}
                                    alt={activeItem.clientName}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-[#251438] dark:border-[#64FFDA]"
                                />
                            )}
                            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs sm:text-sm md:text-base">
                                <span className="roboto-bold text-[#251438] dark:text-darkModeHeading">
                                    {activeItem.clientName}
                                </span>
                                {activeItem.schoolWebsite && (
                                    <>
                                        <span className="text-gray-400 font-normal">|</span>
                                        <span className="roboto-medium text-gray-600 dark:text-gray-300">
                                            {activeItem.schoolWebsite}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Editorial Quote Block matching reference image */}
                        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
                            {/* Highlight Serif Headline */}
                            <h3 className="font-cormorant text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-[#1E1E1E] dark:text-[#E6F1FF] font-medium leading-tight sm:leading-snug tracking-tight max-w-2xl px-2">
                                {activeItem.highlightQuote}
                            </h3>

                            {/* Full Paragraph Detail Quote */}
                            <p className="text-gray-800 dark:text-[#8892B0] font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-xl px-2 font-normal">
                                “{activeItem.quote}”
                            </p>
                        </div>

                        {/* Author Signature & Website Link */}
                        <div className="flex flex-col items-center gap-1 mt-1">
                            <span className="roboto-bold text-sm sm:text-base text-[#251438] dark:text-darkModeHeading">
                                {activeItem.author}
                            </span>
                            {activeItem.liveUrl && (
                                <a
                                    href={activeItem.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm text-[#4A62B0] dark:text-[#64FFDA] hover:underline flex items-center gap-1 transition-colors mt-0.5"
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
                        className="hidden md:flex p-3 text-gray-800 dark:text-[#64FFDA] hover:scale-125 active:scale-95 transition-all cursor-pointer z-20 flex-shrink-0"
                    >
                        <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-5 lg:w-14 lg:h-6">
                            <path d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599" />
                            <path d="M1.19088 9.16982H40.6755" />
                        </svg>
                    </button>

                    {/* Mobile Navigation Arrows (Centered at bottom side-by-side matching screenshot) */}
                    <div className="flex md:hidden items-center justify-center gap-8 sm:gap-12 mt-6 sm:mt-8 z-20 w-full">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous Testimonial"
                            className="p-3 text-gray-800 dark:text-[#64FFDA] hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/5"
                        >
                            <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-5">
                                <path d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116" />
                                <path d="M42.8633 9.18125L3.37868 9.18125" />
                            </svg>
                        </button>

                        {/* Pagination Dots indicator */}
                        <div className="flex items-center gap-2">
                            {testimonialsData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setSlideDirection(idx > currentIndex ? 'next' : 'prev');
                                        setCurrentIndex(idx);
                                    }}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        currentIndex === idx
                                            ? 'w-6 bg-[#251438] dark:bg-[#64FFDA]'
                                            : 'w-2 bg-gray-300 dark:bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            aria-label="Next Testimonial"
                            className="p-3 text-gray-800 dark:text-[#64FFDA] hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center rounded-full active:bg-black/5 dark:active:bg-white/5"
                        >
                            <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-5">
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

