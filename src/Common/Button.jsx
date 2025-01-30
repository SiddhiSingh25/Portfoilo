import React from 'react';

function Button({ btnData, handleBtn, className }) {
    return (
        <>
            <button
                className={`btn md:px-3 md:py-3 px-4 py-3 border-[.01rem] text-[2.2vh] border-solid dark:border-darkModeHeading border-lightModeHeading rounded-[3px] flex items-center justify-center dark:text-darkModeHeading text-lightModeHeading  ease-in-out ${className}`}
                onClick={(e) => handleBtn(e)}
            >
                {btnData}
            </button>
        </>
    );
}

export default Button;
