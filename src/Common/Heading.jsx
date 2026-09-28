function Heading({ count, title, className = "" }) {
    return (
        <div className={`flex items-center gap-2 sm:gap-3 w-full ${className}`}>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                {count && (
                    <span className="text-lightModeHeading dark:text-darkModeHeading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-semibold leading-none">
                        {count}
                    </span>
                )}
                <h2 className="text-lightModeText dark:text-darkmodeSpan text-xl sm:text-2xl md:text-3xl lg:text-4xl roboto-bold leading-tight">
                    {title}
                </h2>
            </div>
            <div className="ml-2 sm:ml-3 h-[1px] bg-[#737a8e]/60 dark:bg-[#737a8e] flex-1 min-w-[20px] max-w-[300px]"></div>
        </div>
    );
}

export default Heading;