import { useState, useEffect } from "react";
import Heading from "../Common/Heading";
import {
    FiBriefcase,
    FiCalendar,
    FiMapPin,
    FiChevronDown,
    FiChevronUp,
    FiAward,
    FiBookOpen
} from "react-icons/fi";
import { BiSolidGraduation } from "react-icons/bi";
import { IoTriangle } from "react-icons/io5";

function Education() {
    const educationData = [
        {
            id: "macreel",
            category: "experience",
            nodeYear: "2026",
            organization: "Macreel Infosoft Pvt. Ltd.",
            tagline: "Mobile App & Web Development Studio",
            location: "Sector 63, Noida, UP",
            website: "#",
            iconType: "work",
            roles: [
                {
                    id: "macreel-rn",
                    title: "React Native Developer",
                    employmentType: "Full-time",
                    period: "Feb 2026 - Present",
                    location: "Sector 63, Noida, UP",
                    department: "Department : Information Technology (IT)",
                    mode: "Mode : On-site (6 Days/Week)",
                    roleDetails: "Role : Mobile App & Web Development",
                    techStack: ["React Native", "React.js", "JavaScript", "REST APIs", "Mobile Dev", "Git"],
                    details: [
                        "Developing high-performance cross-platform mobile applications with React Native for iOS and Android.",
                        "Building responsive, dynamic web user interfaces using React.js and modern JavaScript (ES6+).",
                        "Integrating REST APIs, implementing state management, and optimizing UI render performance."
                    ]
                }
            ]
        },
        {
            id: "gcrg",
            category: "education",
            nodeYear: "2025",
            organization: "GCRG Lucknow",
            tagline: "Affiliated with AKTU University",
            location: "Lucknow, Uttar Pradesh",
            website: "#",
            iconType: "degree",
            roles: [
                {
                    id: "btech-cs",
                    title: "B.Tech - CSE (Data Science)",
                    employmentType: "Higher Education",
                    period: "2025 - Present",
                    location: "Lucknow, Uttar Pradesh",
                    marks: "Status : 3rd Year",
                    university: "University : AKTU",
                    branch: "Branch : Computer Science (Data Science)",
                    techStack: ["Data Science", "Python", "Data Structures", "DBMS", "Algorithms"],
                    details: [
                        "Currently pursuing 3rd year in Computer Science & Engineering with specialization in Data Science.",
                        "Focusing on core CS subjects including Data Structures, Algorithms, Machine Learning fundamentals, and Database Systems.",
                        "Actively building web and software applications alongside academic curriculum."
                    ]
                }
            ]
        },
        {
            id: "polytechnic",
            category: "education",
            nodeYear: "2022",
            organization: "Government Girls Polytechnic Ballia",
            tagline: "Technical Education Board (BTEUP)",
            location: "Ballia, UP",
            website: "#",
            iconType: "diploma",
            roles: [
                {
                    id: "diploma-it",
                    title: "Diploma in Information Technology",
                    employmentType: "Diploma",
                    period: "2022 - 2025",
                    location: "Ballia, UP",
                    marks: "Aggregate : 82.6%",
                    board: "Board : BTEUP",
                    branch: "Branch : Information Technology",
                    medium: "Medium : English",
                    techStack: ["Information Technology", "Web Technologies", "DBMS", "C / C++", "Networking"],
                    details: [
                        "Graduated with Distinction, securing an aggregate score of 82.6% in Information Technology.",
                        "Acquired in-depth technical knowledge in Web Programming, Database Management, and Operating Systems.",
                        "Successfully completed academic projects demonstrating practical coding and problem-solving skills."
                    ]
                }
            ]
        },
        {
            id: "school",
            category: "education",
            nodeYear: "2018",
            organization: "Shri Krishn Inter College",
            tagline: "Uttar Pradesh Secondary Education Board",
            location: "Ballia, UP",
            website: "#",
            iconType: "school",
            roles: [
                {
                    id: "hs-school",
                    title: "Senior Secondary Education & High School",
                    employmentType: "Secondary Education",
                    period: "2018 - 2022",
                    location: "Ballia, UP",
                    marks: "Percentage : 74.0%",
                    stream: "Stream : Mathematics & Science",
                    board: "Board : UP Board",
                    medium: "Medium : Hindi",
                    techStack: ["Mathematics", "Science", "Logic & Problem Solving"],
                    details: [
                        "Completed Senior Secondary Education & High School with 74.0% marks under UP Board.",
                        "Focused on Mathematics, Science, and foundational computer concepts."
                    ]
                }
            ]
        }
    ];

    // Single expanded role ID state (Accordion behavior: only one open at a time)
    const [expandedRoleId, setExpandedRoleId] = useState("macreel-rn");
    const [visibleItems, setVisibleItems] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const itemId = entry.target.getAttribute("data-id");
                        if (itemId) {
                            setVisibleItems((prev) => ({ ...prev, [itemId]: true }));
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll(".timeline-item-anim");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Accordion toggle: opening one collapses others
    const toggleRole = (roleId) => {
        setExpandedRoleId(prev => (prev === roleId ? null : roleId));
    };

    return (
        <section
            className="min-h-screen w-full py-12 md:py-20 px-4 sm:px-8 md:px-16 flex items-center justify-center flex-col overflow-hidden"
            id="education"
        >
            <div className="w-full max-w-5xl flex items-start justify-start mb-8 md:mb-10">
                <Heading count="04." title="Experience & Education" />
            </div>

            {/* Connected Vertical Timeline (Clean Open Layout, No Cards) */}
            <div className="relative w-full max-w-5xl pl-2 sm:pl-4 md:pl-6">
                {/* Continuous Vertical Spine Line */}
                <div className="absolute left-[24px] sm:left-[32px] md:left-[40px] top-5 bottom-5 w-[2px] bg-gradient-to-b from-lightModeHeading via-[#4A62B0] to-lightModeHeading dark:from-darkModeHeading dark:via-teal-400 dark:to-darkModeHeading rounded-full z-0 opacity-80" />

                <div className="flex flex-col gap-10 relative z-10">
                    {educationData.map((item, index) => {
                        const isVisible = visibleItems[item.id];
                        return (
                            <div
                                key={item.id}
                                data-id={item.id}
                                style={{ transitionDelay: `${index * 120}ms` }}
                                className={`timeline-item-anim flex items-start gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                                    isVisible
                                        ? "opacity-100 translate-y-0 scale-100"
                                        : "opacity-0 translate-y-12 scale-[0.97]"
                                }`}
                            >
                                {/* Circular Timeline Node (Year Badge) */}
                                <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white dark:bg-[#0A192F] text-lightModeHeading dark:text-darkModeHeading border-2 border-lightModeHeading dark:border-darkModeHeading shadow-md shadow-lightModeHeading/10 dark:shadow-darkModeHeading/10 flex-shrink-0 hover:scale-110 transition-transform duration-300">
                                    <span className="text-xs sm:text-sm font-bold roboto font-mono tracking-tighter">
                                        {item.nodeYear}
                                    </span>
                                </div>

                                {/* Open Content Area (No Boxed Cards) */}
                                <div className="flex-1 pt-0.5">
                                    {item.roles.map((role) => {
                                        const isExpanded = expandedRoleId === role.id;
                                        const primaryTitle = role.title;
                                        const secondarySubtitle = `${item.organization} | ${role.period}`;

                                        return (
                                            <div key={role.id} className="w-full">
                                                {/* Header Row */}
                                                <div
                                                    onClick={() => toggleRole(role.id)}
                                                    className="flex items-center justify-between cursor-pointer select-none group/item pb-3 border-b border-gray-200/60 dark:border-gray-800/60 transition-colors"
                                                >
                                                    <div className="pr-4">
                                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-[#E6F1FF] roboto leading-snug group-hover/item:text-lightModeHeading dark:group-hover/item:text-darkModeHeading transition-colors duration-300">
                                                            {primaryTitle}
                                                        </h3>
                                                        <p className="text-xs sm:text-sm text-gray-500 dark:text-[#8892B0] font-sans mt-0.5">
                                                            {secondarySubtitle}
                                                        </p>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        className={`p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
                                                            isExpanded
                                                                ? "text-lightModeHeading dark:text-darkModeHeading bg-[#D3DEFA]/40 dark:bg-teal-950/40"
                                                                : "text-gray-400 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/80"
                                                        }`}
                                                        aria-label="Toggle details"
                                                    >
                                                        {isExpanded ? <FiChevronUp className="text-lg md:text-xl" /> : <FiChevronDown className="text-lg md:text-xl" />}
                                                    </button>
                                                </div>

                                                {/* Expanded Content Drawer */}
                                                <div
                                                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                                        isExpanded
                                                            ? "grid-rows-[1fr] opacity-100 mt-4"
                                                            : "grid-rows-[0fr] opacity-0 mt-0"
                                                    }`}
                                                >
                                                    <div className="overflow-hidden">
                                                        <div className="space-y-4 pl-1 pb-2">
                                                            {/* Sub Badges Grid */}
                                                            <div className="flex flex-wrap gap-2 text-xs">
                                                                <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 font-mono">
                                                                    {role.employmentType}
                                                                </span>
                                                                {role.department && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 font-mono">
                                                                        {role.department}
                                                                    </span>
                                                                )}
                                                                {role.branch && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 font-mono">
                                                                        {role.branch}
                                                                    </span>
                                                                )}
                                                                {role.marks && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-[#D3DEFA]/40 dark:bg-teal-950/40 text-lightModeHeading dark:text-darkModeHeading border border-[#4A62B0]/30 dark:border-teal-800/50 font-semibold font-mono">
                                                                        {role.marks}
                                                                    </span>
                                                                )}
                                                                {role.roleDetails && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 font-mono">
                                                                        {role.roleDetails}
                                                                    </span>
                                                                )}
                                                                {role.mode && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 font-mono">
                                                                        {role.mode}
                                                                    </span>
                                                                )}
                                                                {role.board && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 font-mono">
                                                                        {role.board}
                                                                    </span>
                                                                )}
                                                                {role.university && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 font-mono">
                                                                        {role.university}
                                                                    </span>
                                                                )}
                                                                {role.medium && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/60 font-mono">
                                                                        {role.medium}
                                                                    </span>
                                                                )}
                                                                {role.location && (
                                                                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-darkModeBox/90 text-gray-600 dark:text-[#8892B0] border border-gray-200 dark:border-gray-700/60 flex items-center gap-1 font-mono">
                                                                        <FiMapPin className="text-xs" /> {role.location}
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {/* Bullet Details */}
                                                            <div className="space-y-2 pt-1">
                                                                {role.details.map((point, pIndex) => (
                                                                    <div key={pIndex} className="flex items-start gap-2.5 text-gray-600 dark:text-[#8892B0]">
                                                                        <IoTriangle className="text-[10px] rotate-90 text-lightModeHeading dark:text-darkModeHeading mt-1 flex-shrink-0" />
                                                                        <p className="roboto text-xs sm:text-sm leading-relaxed">{point}</p>
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            {/* Skills Pills */}
                                                            {role.techStack && role.techStack.length > 0 && (
                                                                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                                                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 mr-1">Skills:</span>
                                                                    {role.techStack.map((tech, tIndex) => (
                                                                        <span
                                                                            key={tIndex}
                                                                            className="px-2.5 py-0.5 text-xs font-mono rounded bg-gray-100 dark:bg-gray-800 text-lightModeHeading dark:text-darkModeHeading border border-gray-200/80 dark:border-gray-700/50"
                                                                        >
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Education;


