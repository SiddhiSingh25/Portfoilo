import Left from "./Left";
import Right from "./Right";

function About() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center py-12 md:py-20 px-4 sm:px-8 md:px-16" id="about">
            <div className="w-full max-w-7xl flex items-center justify-center flex-col md:flex-row gap-10 md:gap-12">
                <Left />
                <Right />
            </div>
        </div>
    );
}

export default About;
