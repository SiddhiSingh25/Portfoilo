import Left from "./Left";
import Right from "./Right";

function About() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center py-12 md:py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden" id="about">
            <div className="w-full max-w-7xl flex items-center justify-center flex-col md:flex-row gap-10 md:gap-12 relative z-10">
                <svg
                    viewBox="0 0 120 120"
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 -right-80 sm:-top-40 sm:-right-40 md:-top-50 md:-right-70 h-80 w-80 sm:h-96 sm:w-96 md:h-[420px] md:w-[420px] text-[#D3DEFA] dark:text-[#233554] opacity-60 z-0 select-none"
                >
                    <g fill="none" stroke="currentColor" strokeWidth="0.9">
                        <circle cx="60" cy="60" r="52"></circle>
                        <circle cx="60" cy="60" r="38" opacity=".7"></circle>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(0 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(30 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(60 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(90 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(120 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(150 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(180 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(210 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(240 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(270 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(300 60 60)" opacity=".7"></ellipse>
                        <ellipse cx="60" cy="30" rx="9" ry="26" transform="rotate(330 60 60)" opacity=".7"></ellipse>
                        <circle cx="60" cy="60" r="8"></circle>
                    </g>
                </svg>
                <Left />
                <Right />
            </div>
        </section>
    );
}

export default About;
