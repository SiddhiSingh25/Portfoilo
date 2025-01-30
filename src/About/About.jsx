import Left from "./Left";
import Right from "./Right";

function About() {
    return (
        <div className="h-[125vh] w-[100vw] flex items-center justify-center border-2 border-gray-300 dark:border-gray-700 border-solid py-10 md:px-16" id="about">
            <div className="h-[90%] w-[100%] md:w-[88%] flex items-center justify-center flex-col md:flex-row">
                <Left />
                <Right />
            </div>
        </div>
    );
}

export default About;
