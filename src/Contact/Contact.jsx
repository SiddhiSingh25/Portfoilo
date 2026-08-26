import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import ProfileImg from "../assets/profile-avatar.jpg";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

function Contact() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        })();
    }, []);

    const cards = [
        {
            name: "Github",
            icon: <FaGithub className="text-xl sm:text-2xl text-gray-900 dark:text-white" />,
            link: "https://github.com/SiddhiSingh25",
            rotation: "-rotate-[12deg] translate-y-1.5",
            zIndex: "z-10",
        },
        {
            name: "Instagram",
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
                    <radialGradient id="rg-contact" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="100%" stopColor="#285AEB" />
                    </radialGradient>
                    <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        fill="url(#rg-contact)"
                    />
                </svg>
            ),
            link: "https://instagram.com/siddhyy_here",
            rotation: "-rotate-[6deg] translate-y-1",
            zIndex: "z-20",
        },
        {
            name: "Twitter",
            icon: <RiTwitterXFill className="text-xl sm:text-2xl text-gray-900 dark:text-white" />,
            link: "https://twitter.com/SiddhiSingh07",
            rotation: "rotate-0 translate-y-0",
            zIndex: "z-30",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="text-xl sm:text-2xl text-[#0A66C2]" />,
            link: "https://www.linkedin.com/in/siddhi-singh07",
            rotation: "rotate-[6deg] translate-y-1",
            zIndex: "z-20",
        },
        {
            name: "Mail",
            icon: (
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
            link: "mailto:singhsiddhi960@gmail.com",
            rotation: "rotate-[12deg] translate-y-1.5",
            zIndex: "z-10",
        },
    ];

    return (
        <section id="contact" className="w-full py-8 sm:py-12 px-4 flex flex-col items-center justify-center bg-lightModeBg dark:bg-darkModeBg transition-colors">
            <div className="max-w-xl w-full flex flex-col items-center text-center space-y-3.5">

                {/* Headline */}
                <h2 className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-gray-800 dark:text-gray-300 font-normal leading-snug">
                    If you've read this far, you might be interested in what I do.
                </h2>

                {/* Book a call button */}
                <button
                    data-cal-namespace="30min"
                    data-cal-link="siddhi-singh/30min"
                    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                    className="group relative inline-flex items-center gap-2.5 px-5 py-2 bg-white dark:bg-[#112240] border border-gray-300 dark:border-gray-700/80 rounded-full shadow-sm hover:shadow-md hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                    <img
                        src={ProfileImg}
                        alt="Siddhi Singh"
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border border-gray-200 dark:border-gray-600"
                    />
                    <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                        Book a call
                    </span>
                </button>

                {/* OR Divider */}
                <div className="text-[11px] sm:text-xs font-semibold tracking-widest text-blue-300 dark:text-blue-400 uppercase">
                    OR
                </div>

                {/* Cards Deck */}
                <div className="flex items-center justify-center -space-x-2 sm:-space-x-3 pt-1 pb-2 px-2">
                    {cards.map((card, idx) => (
                        <a
                            key={idx}
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                relative w-16 h-20 sm:w-16 sm:h-20
                                bg-white dark:bg-[#112240] 
                                border border-gray-200/90 dark:border-gray-700/80 
                                rounded-xl shadow-md
                                flex flex-col items-center justify-center gap-1 sm:gap-1.5 
                                ${card.rotation} ${card.zIndex} 
                                hover:z-50 hover:rotate-0 hover:-translate-y-3 hover:scale-110 
                                hover:shadow-xl hover:border-blue-400 dark:hover:border-[#64FFDA] 
                                transition-all duration-300 ease-out cursor-pointer select-none
                            `}
                        >
                            <div className="flex items-center justify-center">
                                {card.icon}
                            </div>
                            <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 dark:text-gray-400 transition-colors">
                                {card.name}
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Contact;

