import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation (optional)

function Error() {
    const navigate = useNavigate(); // For navigation (optional)

    const handleGoHome = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="error-page h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-[#1e2022] text-[#E6F1FF] px-4">
            <h1 className="text-6xl text-[#64FFDA] roboto-bold">Oops!</h1>
            <h2 className="text-4xl text-[#E6F1FF] roboto-bold">Something went wrong.</h2>
            <p className="text-xl text-[#8892B0] roboto text-center mt-4">
                We couldn't load the page you're looking for. Please try again later or contact support if the issue persists.
            </p>
            <button 
                className="mt-6 px-6 py-2 bg-[#64FFDA] text-[#1e2022] rounded hover:bg-[#54d0d8] transition"
                onClick={handleGoHome} // Navigate to the home page on click
            >
                Go to Home
            </button>
        </div>
    );
}

export default Error;
