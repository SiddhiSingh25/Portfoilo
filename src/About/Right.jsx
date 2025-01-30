import Profile from "../assets/newImg.jpg";

function Right() {
    return (
        <>
            <div className="right h-[70%] md:w-[40%] w-[100%] flex md:items-start items-center justify-center">
                <div className="md:h-[42vh] md:w-[42vh] h-[37vh] w-[37vh] relative border-2 border-solid border-lightModeHeading dark:border-darkModeHeading rounded-[4px]">
                    <div className="md:h-[42vh] md:w-[42vh] h-[37vh] w-[37vh] image-container absolute right-4 bottom-4 rounded-[4px]">
                        <img 
                            src={Profile} 
                            alt="" 
                            className="h-[100%] w-[100%] object-cover object-center rounded-[4px] image transition-transform duration-300 ease-in-out hover:translate-x-2 hover:translate-y-2"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Right;
