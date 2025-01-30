function Heading({count, title, className}) {
    return (
        <>
            <div className={`flex items-center justify-start w-[100%] ${className}`}>
                <div className=" flex items-center justify-start h-[100%] gap-1">
                    <p className="dark:text-darkModeHeading  text-lightModeHeading  text-3xl font-medium">{count}</p>
                    <h1 className=" dark:text-darkmodeSpan text-lightModeText  text-[2.8vh] md:text-4xl roboto-bold">{title}</h1>
                </div>
                <div className="ml-2 h-[1px] bg-[#737a8e] w-[40%] flex items-start justify-start "></div>
            </div>
        </>
    )
}
export default Heading