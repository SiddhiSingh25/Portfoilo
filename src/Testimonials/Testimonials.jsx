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
        clientName: 'Nour A.',
        schoolWebsite: 'School Website',
        liveUrl: 'https://www.aisgazipur.in/',
        profileImg: profile1,
        highlightQuote: `"Honestly I was skeptical about hiring a designer remotely ... Mazen made that concern disappear pretty quickly!"`,
        quote: `He got the brief, pushed back where it needed pushing back, and delivered something I'm genuinely proud to put in front of people.`,
        author: '— Nour A.',
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

    const handlePrev = () => {
        setSlideDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSlideDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
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
        <section id="testimonials" className="w-full py-16 px-4 sm:px-8 md:px-16 flex items-center justify-center bg-[#FDFBF7] dark:bg-darkModeBg transition-colors duration-300 overflow-hidden relative">
            {/* Striped Background Overlay matching reference image */}
            <div
                className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-10 z-0"
                style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, #DCE9F6 0px, #DCE9F6 90px, transparent 90px, transparent 180px)'
                }}
            />

            <div className="w-full max-w-7xl flex flex-col items-center justify-center relative z-10">

                {/* Standard Portfolio Section Header */}
                <div className="w-full">
                    <Heading count="04." title="Testimonials" />
                </div>

                {/* Main Carousel Area */}
                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="relative w-full flex items-center justify-between py-6 min-h-[420px]"
                >
                    {/* Left Thin Arrow */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="p-2 sm:p-4 text-gray-700 dark:text-[#64FFDA] hover:scale-125 active:scale-95 transition-all cursor-pointer z-20 flex-shrink-0"
                    >
                        <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-4 sm:w-12 sm:h-5 md:w-14 md:h-6">
                            <path d="M9.90649 16.96L2.1221 9.17556L9.9065 1.39116" />
                            <path d="M42.8633 9.18125L3.37868 9.18125" />
                        </svg>
                    </button>

                    {/* Active Main Testimonial Content */}
                    <div
                        key={`${activeItem.id}-${currentIndex}`}
                        className={`flex-1 max-w-4xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center gap-5 ${slideDirection === 'next' ? 'animate-slide-right' : 'animate-slide-left'
                            }`}
                    >

                        {/* Top Info Bar: Profile Image + Name | Website + Live Link + Client Type */}
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-white/80 dark:bg-[#172A45]/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-gray-200/80 dark:border-gray-700/80 shadow-sm">
                            {/* Profile Image */}
                            {activeItem.profileImg && (
                                <img
                                    src={activeItem.profileImg}
                                    alt={activeItem.clientName}
                                    className="w-10 h-10 rounded-full object-cover border border-[#251438] dark:border-[#64FFDA]"
                                />
                            )}

                            {/* Name | School Website */}
                            <div className="flex items-center gap-2 flex-wrap text-sm sm:text-base">
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


                        <div className="flex flex-col items-center gap-2">
                            {/* Large Editorial Headline Quote (Matching Reference Image Style with Cormorant Garamond) */}
                            <h3 className="font-cormorant text-3xl sm:text-4xl md:text-3xl text-[#1E1E1E] dark:text-[#E6F1FF] font-medium leading-tight tracking-tight max-w-3xl">
                                {activeItem.highlightQuote}
                            </h3>

                            {/* Full Detail Description Quote (Underneath Headline) */}
                            <p className="text-lightModeText dark:text-[#8892B0] roboto text-sm roboto md:text-base leading-relaxed max-w-2xl">
                                "{activeItem.quote}"
                            </p>
                        </div>

                        {/* Author Signature */}
                        <span className="roboto-bold text-base sm:text-lg text-[#251438] dark:text-darkModeHeading mt-1">
                            {activeItem.author}
                        </span>

                    </div>

                    {/* Right Thin Arrow */}
                    <button
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="p-2 sm:p-4 text-gray-700 dark:text-[#64FFDA] active:scale-35 transition-all cursor-pointer z-20 flex-shrink-0"
                    >
                        <svg viewBox="0 0 44 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-4 sm:w-12 sm:h-5 md:w-14 md:h-6">
                            <path d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599" />
                            <path d="M1.19088 9.16982H40.6755" />
                        </svg>
                    </button>
                </div>



            </div>
        </section>
    );
}

export default Testimonials;
