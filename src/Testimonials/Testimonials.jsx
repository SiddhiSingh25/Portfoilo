import React, { useState, useEffect } from 'react';
import Heading from '../Common/Heading';
import profile1 from '../assets/profile-avatar.jpg';
import profile2 from '../assets/pro.jpg';
import profile3 from '../assets/newImg.jpg';

const testimonialsData = [
    {
        id: 1,
        clientName: 'Nour A.',
        schoolWebsite: 'School Website',
        profileImg: profile1,
        highlightQuote: `"Honestly I was skeptical about hiring a designer remotely ... Mazen made that concern disappear pretty quickly!"`,
        quote: `He got the brief, pushed back where it needed pushing back, and delivered something I'm genuinely proud to put in front of people.`,
        author: '— Nour A.'
    },
    {
        id: 2,
        clientName: 'Ziakas R.',
        schoolWebsite: 'Dance Academy Website',
        profileImg: profile2,
        highlightQuote: `"Mazen is incredible! True artistic talent and excellent communication throughout."`,
        quote: `I really feel like I can trust him during the entirety of the hire, and he constantly goes out of his way to make the work the best it can be.`,
        author: '— Ziakas R.'
    },
    {
        id: 3,
        clientName: 'Elena M.',
        schoolWebsite: 'NestMart E-Commerce',
        profileImg: profile3,
        highlightQuote: `"A rare developer who actually understands both high-level design aesthetics and rock-solid frontend execution!"`,
        quote: `Turned our complex requirements into a fast, responsive, and stunning web experience.`,
        author: '— Elena M.'
    }
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('next');
    const [isPaused, setIsPaused] = useState(false);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const handlePrev = () => {
        setSlideDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSlideDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    // Touch handlers for mobile swipe gesture
    const minSwipeDistance = 40;

    const onTouchStart = (e) => {
        setIsPaused(true);
        setTouchEndX(null);
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        setIsPaused(false);
        if (!touchStartX || !touchEndX) return;
        const distance = touchStartX - touchEndX;
        if (distance > minSwipeDistance) {
            handleNext();
        } else if (distance < -minSwipeDistance) {
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
        <section id="testimonials" className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 flex items-center justify-center bg-[#FDFBF7] dark:bg-darkModeBg transition-colors duration-300 overflow-hidden relative">
            {/* Striped Background Overlay matching reference image */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-10 z-0 overflow-hidden"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #DCE9F6 0px, #DCE9F6 60px, transparent 60px, transparent 120px)'
                }}
            />

            <div className="w-full max-w-7xl flex flex-col items-center justify-center relative z-10">

                {/* Standard Portfolio Section Header */}
                <div className="w-full mb-4 sm:mb-8">
                    <Heading count="04." title="Testimonials" />
                </div>

                {/* Main Carousel Area */}
                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    className="relative w-full flex flex-col items-center justify-center py-4 sm:py-6"
                >
                    {/* Active Main Testimonial Content */}
                    <div
                        key={`${activeItem.id}-${currentIndex}`}
                        className={`w-full max-w-4xl mx-auto px-2 sm:px-6 md:px-12 flex flex-col items-center text-center gap-4 sm:gap-6 ${
                            slideDirection === 'next' ? 'animate-slide-right' : 'animate-slide-left'
                        }`}
                    >
                        {/* Top Info Bar: Profile Image + Name | Website */}
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/80 dark:bg-[#172A45]/80 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200/80 dark:border-gray-700/80 shadow-sm">
                            {/* Profile Image */}
                            {activeItem.profileImg && (
                                <img
                                    src={activeItem.profileImg}
                                    alt={activeItem.clientName}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-[#251438] dark:border-[#64FFDA] flex-shrink-0"
                                />
                            )}

                            {/* Name | School Website */}
                            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm md:text-base justify-center">
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

                        {/* Quotes */}
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            {/* Large Editorial Headline Quote */}
                            <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1E1E1E] dark:text-[#E6F1FF] font-medium leading-snug sm:leading-tight tracking-tight max-w-3xl">
                                {activeItem.highlightQuote}
                            </h3>

                            {/* Full Detail Description Quote */}
                            <p className="text-lightModeText dark:text-[#8892B0] roboto text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
                                "{activeItem.quote}"
                            </p>
                        </div>

                        {/* Author Signature */}
                        <span className="roboto-bold text-xs sm:text-sm md:text-base text-[#251438] dark:text-darkModeHeading mt-1">
                            {activeItem.author}
                        </span>
                    </div>

                    {/* Centered Navigation Arrows at the Bottom */}
                    <div className="flex items-center justify-center gap-8 sm:gap-12 mt-6 sm:mt-10 z-20">
                        {/* Left Arrow */}
                        <button
                            onClick={handlePrev}
                            aria-label="Previous Testimonial"
                            className="p-2 sm:p-4 text-gray-700 dark:text-[#64FFDA] hover:scale-125 active:scale-95 transition-all cursor-pointer"
                        >
                            <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-4 sm:w-12 sm:h-5 md:w-14 md:h-6">
                                <path d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116" />
                                <path d="M42.8633 9.18125L3.37868 9.18125" />
                            </svg>
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={handleNext}
                            aria-label="Next Testimonial"
                            className="p-2 sm:p-4 text-gray-700 dark:text-[#64FFDA] hover:scale-125 active:scale-95 transition-all cursor-pointer"
                        >
                            <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-4 sm:w-12 sm:h-5 md:w-14 md:h-6">
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


