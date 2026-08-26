import React, { useState, useEffect } from 'react';

function Footer() {
  const innerStatements = [
    'Hello, World!',
    'Made with love & overthinking',
    'Status: 200 OK | Open for opportunities',
    'git push origin siddhi-dev',
    'Chai/Coffee -> Code -> Repeat',
    'Developer on weekdays',
    'Freelancer on weekends',
  ];

  const [statementIndex, setStatementIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [views, setViews] = useState(null);

  // Typewriter effect logic
  useEffect(() => {
    const currentFullText = innerStatements[statementIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    if (!isDeleting && displayText === currentFullText) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(pauseTimeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setStatementIndex((prev) => (prev + 1) % innerStatements.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, statementIndex, innerStatements]);

  // Page Views API integration
  useEffect(() => {
    const hostname = window.location.hostname;
    const site = hostname && hostname !== 'localhost' && hostname !== '127.0.0.1' ? hostname : 'siddhisingh.dev';
    const path = '/';

    fetch(`https://page-views-api.ratneshc.com/api/v1/track?site=${site}&path=${path}`)
      .then(() => fetch(`https://page-views-api.ratneshc.com/api/v1/views?site=${site}&path=${path}`))
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.views === 'number') {
          setViews(data.views);
        }
      })
      .catch((err) => {
        console.error('Page Views API error:', err);
      });
  }, []);

  return (
    <footer className="w-full bg-[#DCE9F6] dark:bg-[#172A45] text-gray-800 dark:text-gray-200 transition-colors duration-300 relative mt-8 sm:mt-10 md:mt-12">
      {/* Scalloped Top Wave Divider */}
      <div className="absolute -top-5 sm:-top-7 md:-top-9 left-0 right-0 w-full overflow-hidden leading-none select-none pointer-events-none z-20">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full h-5 sm:h-7 md:h-9 text-[#DCE9F6] dark:text-[#172A45] fill-current block transition-colors duration-300"
        >
          <path d="M 0 40 Q 30 0, 60 40 Q 90 0, 120 40 Q 150 0, 180 40 Q 210 0, 240 40 Q 270 0, 300 40 Q 330 0, 360 40 Q 390 0, 420 40 Q 450 0, 480 40 Q 510 0, 540 40 Q 570 0, 600 40 Q 630 0, 660 40 Q 690 0, 720 40 Q 750 0, 780 40 Q 810 0, 840 40 Q 870 0, 900 40 Q 930 0, 960 40 Q 990 0, 1020 40 Q 1050 0, 1080 40 Q 1110 0, 1140 40 Q 1170 0, 1200 40 L 1200 40 L 0 40 Z" />
        </svg>
      </div>

      <div className="w-[88%] mx-auto pt-3 sm:pt-5 pb-6 flex flex-col items-center justify-center space-y-3">

        {/* Typewriter Console Statement */}
        <div className="h-7 overflow-hidden flex items-center justify-center">
          <p className="font-mono text-[11px] sm:text-xs text-[#3A4F96] dark:text-[#64FFDA] bg-white/85 dark:bg-[#0A192F]/90 px-3.5 py-1 rounded-md border border-[#4A62B0]/25 dark:border-gray-700/60 flex items-center select-none shadow-sm backdrop-blur-sm">
            <span>console.log("</span>
            <span className="text-gray-900 dark:text-white font-medium">{displayText}</span>
            <span className="animate-pulse font-bold text-[#3A4F96] dark:text-[#64FFDA]">|</span>
            <span>");</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-800 dark:text-[#8892B0] text-sm roboto font-medium">
          <p>&copy; {new Date().getFullYear()} Siddhi Singh. All rights reserved.</p>
        </div>

        {/* Visitor Counter Badge */}
        <div className="text-center text-xs text-gray-800 dark:text-gray-300 roboto flex items-center gap-2 bg-white/85 dark:bg-[#0A192F]/80 px-3.5 py-1 rounded-full border border-[#4A62B0]/25 dark:border-gray-700/70 shadow-sm backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>You are visitor #{views !== null ? views.toLocaleString() : '...'}</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
