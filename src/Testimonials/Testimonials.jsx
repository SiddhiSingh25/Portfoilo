import React, { useState, useEffect } from 'react';
import Heading from '../Common/Heading';

const testimonialsData = [
    {
        id: 1,
        clientType: 'Direct Clients',
        logoType: 'M',
        logoColor: '#6B46C1',
        quote: `"Honestly I was skeptical about hiring a designer remotely for something this important. Mazen made that concern disappear pretty quickly. He got the brief, pushed back where it needed pushing back, and delivered something I'm genuinely proud to put in front of people."`,
        author: '— Nour A.',
        stars: 5,
        avatarSvg: (
            <svg viewBox="0 0 160 160" className="w-28 h-28 md:w-36 md:h-36 drop-shadow-md">
                {/* Hair & Back Head */}
                <path d="M40 75 C35 40, 50 20, 80 20 C110 20, 125 40, 120 75 C120 75, 125 80, 122 95 C118 105, 105 110, 80 110 C55 110, 42 105, 38 95 C35 80, 40 75, 40 75 Z" fill="#1E1035" />
                {/* Curly Hair Top */}
                <path d="M45 45 C40 30, 65 15, 80 18 C95 15, 120 30, 115 45 C125 35, 100 12, 80 12 C60 12, 35 35, 45 45 Z" fill="#2D1950" />
                {/* Face Skin */}
                <path d="M45 65 C45 50, 115 50, 115 65 C115 95, 105 115, 80 115 C55 115, 45 95, 45 65 Z" fill="#FFF5EB" stroke="#1E1035" strokeWidth="3" />
                {/* Beard */}
                <path d="M48 85 C48 115, 112 115, 112 85 C112 110, 100 122, 80 122 C60 122, 48 110, 48 85 Z" fill="#1E1035" />
                {/* Cheeks */}
                <circle cx="58" cy="88" r="8" fill="#FFB6C1" opacity="0.6" />
                <circle cx="102" cy="88" r="8" fill="#FFB6C1" opacity="0.6" />
                {/* Glasses Frame */}
                <rect x="50" y="65" width="26" height="20" rx="6" fill="none" stroke="#1E1035" strokeWidth="4" />
                <rect x="84" y="65" width="26" height="20" rx="6" fill="none" stroke="#1E1035" strokeWidth="4" />
                <line x1="76" y1="74" x2="84" y2="74" stroke="#1E1035" strokeWidth="4" />
                {/* Star Eyes */}
                <path d="M63 70 L64.5 73.5 L68 74 L65.5 76.5 L66 80 L63 78 L60 80 L60.5 76.5 L58 74 L61.5 73.5 Z" fill="#FFD700" stroke="#1E1035" strokeWidth="1" />
                <path d="M97 70 L98.5 73.5 L102 74 L99.5 76.5 L100 80 L97 78 L94 80 L94.5 76.5 L92 74 L95.5 73.5 Z" fill="#FFD700" stroke="#1E1035" strokeWidth="1" />
                {/* Smile */}
                <path d="M68 94 Q80 106 92 94" fill="#E63946" stroke="#1E1035" strokeWidth="3" strokeLinecap="round" />
                {/* Open Mouth Teeth */}
                <path d="M71 96 Q80 102 89 96 Q80 94 71 96 Z" fill="#FFFFFF" />
                {/* Hands Framed */}
                <path d="M35 125 C30 100, 48 95, 52 110 C54 118, 48 135, 35 125 Z" fill="#FFF5EB" stroke="#1E1035" strokeWidth="3" />
                <path d="M125 125 C130 100, 112 95, 108 110 C106 118, 112 135, 125 125 Z" fill="#FFF5EB" stroke="#1E1035" strokeWidth="3" />
            </svg>
        )
    },
    {
        id: 2,
        clientType: 'Upwork',
        logoType: 'upwork',
        logoColor: '#14A800',
        quote: `"Mazen is incredible! He has excellent communication, professionalism, and true artistic talent. I really feel like I can trust him during the entirety of the hire, and he constantly goes out of his way to make the work the best it can be."`,
        author: '— Ziakas R.',
        stars: 5,
        avatarSvg: (
            <svg viewBox="0 0 160 160" className="w-28 h-28 md:w-36 md:h-36 drop-shadow-md">
                {/* Hair Top Cap */}
                <path d="M42 60 C38 25, 122 25, 118 60 C122 75, 120 90, 115 100 C110 112, 50 112, 45 100 C40 90, 38 75, 42 60 Z" fill="#251438" />
                {/* Face */}
                <path d="M48 62 C48 48, 112 48, 112 62 C112 92, 102 110, 80 110 C58 110, 48 92, 48 62 Z" fill="#FFE5D9" stroke="#251438" strokeWidth="3" />
                {/* Cute Cheeks */}
                <circle cx="60" cy="84" r="7" fill="#FF85A1" opacity="0.6" />
                <circle cx="100" cy="84" r="7" fill="#FF85A1" opacity="0.6" />
                {/* Star Eyes */}
                <path d="M64 70 L65.5 73.5 L69 74 L66.5 76.5 L67 80 L64 78 L61 80 L61.5 76.5 L59 74 L62.5 73.5 Z" fill="#FFD700" stroke="#251438" strokeWidth="1" />
                <path d="M96 70 L97.5 73.5 L101 74 L98.5 76.5 L99 80 L96 78 L93 80 L93.5 76.5 L91 74 L94.5 73.5 Z" fill="#FFD700" stroke="#251438" strokeWidth="1" />
                {/* Smile */}
                <path d="M66 90 Q80 102 94 90" fill="none" stroke="#251438" strokeWidth="4" strokeLinecap="round" />
                {/* Sparkle Hair clip */}
                <path d="M45 40 L50 30 L55 40 L65 45 L55 50 L50 60 L45 50 L35 45 Z" fill="#64FFDA" opacity="0.8" />
            </svg>
        )
    },
    {
        id: 3,
        clientType: 'Direct Clients',
        logoType: 'N',
        logoColor: '#4A62B0',
        quote: `"A rare developer who actually understands both high-level design aesthetics and rock-solid frontend execution. Turned our complex requirements into a fast, responsive, and stunning web experience."`,
        author: '— Elena M.',
        stars: 5,
        avatarSvg: (
            <svg viewBox="0 0 160 160" className="w-28 h-28 md:w-36 md:h-36 drop-shadow-md">
                {/* Hair long */}
                <path d="M35 50 C30 20, 130 20, 125 50 C130 80, 125 125, 115 130 C105 135, 110 90, 80 90 C50 90, 55 135, 45 130 C35 125, 30 80, 35 50 Z" fill="#3D1C5A" />
                {/* Face */}
                <path d="M48 60 C48 45, 112 45, 112 60 C112 90, 102 108, 80 108 C58 108, 48 90, 48 60 Z" fill="#FCD5CE" stroke="#3D1C5A" strokeWidth="3" />
                {/* Glasses round */}
                <circle cx="64" cy="70" r="13" fill="none" stroke="#3D1C5A" strokeWidth="3.5" />
                <circle cx="96" cy="70" r="13" fill="none" stroke="#3D1C5A" strokeWidth="3.5" />
                <line x1="77" y1="70" x2="83" y2="70" stroke="#3D1C5A" strokeWidth="3.5" />
                {/* Star Eyes */}
                <path d="M64 65 L65.5 68.5 L69 69 L66.5 71.5 L67 75 L64 73 L61 75 L61.5 71.5 L59 69 L62.5 68.5 Z" fill="#FFD700" />
                <path d="M96 65 L97.5 68.5 L101 69 L98.5 71.5 L99 75 L96 73 L93 75 L93.5 71.5 L91 69 L94.5 68.5 Z" fill="#FFD700" />
                {/* Cheeks */}
                <circle cx="58" cy="82" r="6" fill="#FF94A8" opacity="0.7" />
                <circle cx="102" cy="82" r="6" fill="#FF94A8" opacity="0.7" />
                {/* Big Smile */}
                <path d="M65 88 Q80 100 95 88 Q80 102 65 88 Z" fill="#D90429" stroke="#3D1C5A" strokeWidth="2" />
            </svg>
        )
    }
];

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(timer);
    }, [currentIndex, isPaused]);

    const activeItem = testimonialsData[currentIndex];

    const getIndexAt = (offset) => {
        const total = testimonialsData.length;
        return (currentIndex + offset + total) % total;
    };

    const prevItem = testimonialsData[getIndexAt(-1)];
    const nextItem = testimonialsData[getIndexAt(1)];

    return (
        <section id="testimonials" className="w-full py-16 px-4 sm:px-8 md:px-16 flex items-center justify-center bg-lightModeBg dark:bg-darkModeBg transition-colors duration-300 overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-8">
                
                {/* Standard Portfolio Section Header */}
                <div className="w-full">
                    <Heading count="04." title="Testimonials" />
                </div>

                {/* Chunky Main Title from User Reference Image */}
                <div className="text-center flex flex-col items-center justify-center mt-2 mb-4">
                    <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C1A4D] dark:text-[#E6F1FF] tracking-wider uppercase drop-shadow-sm">
                        THEY SAID IT, NOT ME
                    </h2>
                    <p className="text-lightModeMuted dark:text-[#8892B0] roboto text-sm sm:text-base md:text-lg mt-2 font-medium">
                        Real reviews from real clients. I didn't write any of these, I promise.
                    </p>
                </div>

                {/* Carousel Container */}
                <div 
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="relative w-full flex items-center justify-center py-6 min-h-[380px]"
                >
                    
                    {/* Left Card (Preview on large screens) */}
                    <div 
                        onClick={handlePrev}
                        className="hidden lg:flex absolute left-[-2%] xl:left-[2%] w-[420px] bg-white dark:bg-[#172A45] rounded-3xl p-6 shadow-md border border-gray-100 dark:border-gray-800 opacity-40 scale-85 hover:opacity-75 transition-all duration-700 ease-in-out cursor-pointer z-0 select-none items-center justify-between"
                    >
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between w-full">
                                {prevItem.logoType === 'upwork' ? (
                                    <span className="font-bold text-lg text-[#14A800]">upwork</span>
                                ) : (
                                    <span className="font-bold text-2xl" style={{ color: prevItem.logoColor }}>{prevItem.logoType}</span>
                                )}
                                <span className="font-fredoka text-xs font-semibold text-[#2C1A4D] dark:text-darkModeHeading">{prevItem.clientType}</span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 italic">{prevItem.quote}</p>
                            <span className="font-caveat text-base font-bold text-[#2C1A4D] dark:text-darkModeHeading">{prevItem.author}</span>
                        </div>
                    </div>

                    {/* Active Main Card */}
                    <div 
                        key={activeItem.id}
                        className="relative w-full max-w-3xl bg-white dark:bg-[#172A45] rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 dark:border-gray-800 z-10 transition-all duration-700 ease-in-out transform scale-100 mx-auto animate-fadeIn"
                    >
                        
                        {/* 5-Star Floating Badge at Top Center */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#251438] dark:bg-[#0A192F] text-amber-400 px-5 py-1.5 rounded-full shadow-lg border-2 border-white dark:border-[#172A45] flex items-center gap-1.5 z-20">
                            {[...Array(activeItem.stars)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>

                        {/* Top Header inside Card */}
                        <div className="flex items-center justify-between w-full mb-6">
                            {/* Client Logo */}
                            <div className="flex items-center gap-2">
                                {activeItem.logoType === 'upwork' ? (
                                    <span className="font-bold text-xl md:text-2xl text-[#14A800] tracking-tight">upwork</span>
                                ) : (
                                    <span className="font-fredoka text-3xl font-extrabold" style={{ color: activeItem.logoColor }}>
                                        {activeItem.logoType}
                                    </span>
                                )}
                            </div>

                            {/* Client Type Tag */}
                            <span className="font-fredoka text-sm sm:text-base font-bold text-[#251438] dark:text-darkModeHeading tracking-wide">
                                {activeItem.clientType}
                            </span>
                        </div>

                        {/* Main Body: Quote + Avatar */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
                            {/* Left Text */}
                            <div className="flex-1 flex flex-col justify-between">
                                <p className="text-lightModeText dark:text-[#D1D5DB] roboto text-base sm:text-lg md:text-xl leading-relaxed font-normal italic">
                                    {activeItem.quote}
                                </p>
                                
                                {/* Author Signature */}
                                <div className="mt-6">
                                    <span className="font-caveat text-xl sm:text-2xl md:text-3xl font-bold text-[#251438] dark:text-darkModeHeading">
                                        {activeItem.author}
                                    </span>
                                </div>
                            </div>

                            {/* Right Vector Avatar */}
                            <div className="flex-shrink-0 flex items-center justify-center">
                                {activeItem.avatarSvg}
                            </div>
                        </div>

                    </div>

                    {/* Right Card (Preview on large screens) */}
                    <div 
                        onClick={handleNext}
                        className="hidden lg:flex absolute right-[-2%] xl:right-[2%] w-[420px] bg-white dark:bg-[#172A45] rounded-3xl p-6 shadow-md border border-gray-100 dark:border-gray-800 opacity-40 scale-85 hover:opacity-75 transition-all duration-700 ease-in-out cursor-pointer z-0 select-none items-center justify-between"
                    >
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between w-full">
                                {nextItem.logoType === 'upwork' ? (
                                    <span className="font-bold text-lg text-[#14A800]">upwork</span>
                                ) : (
                                    <span className="font-bold text-2xl" style={{ color: nextItem.logoColor }}>{nextItem.logoType}</span>
                                )}
                                <span className="font-fredoka text-xs font-semibold text-[#2C1A4D] dark:text-darkModeHeading">{nextItem.clientType}</span>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 italic">{nextItem.quote}</p>
                            <span className="font-caveat text-base font-bold text-[#2C1A4D] dark:text-darkModeHeading">{nextItem.author}</span>
                        </div>
                    </div>

                </div>

                {/* Controls: Prev / Next Buttons & Indicators */}
                <div className="flex items-center justify-center gap-6 mt-2">
                    <button 
                        onClick={handlePrev}
                        aria-label="Previous Testimonial"
                        className="w-10 h-10 rounded-full bg-white dark:bg-[#172A45] text-[#251438] dark:text-[#64FFDA] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex items-center gap-2">
                        {testimonialsData.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                    idx === currentIndex 
                                        ? 'w-8 bg-[#251438] dark:bg-[#64FFDA]' 
                                        : 'w-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                        className="w-10 h-10 rounded-full bg-white dark:bg-[#172A45] text-[#251438] dark:text-[#64FFDA] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Testimonials;
