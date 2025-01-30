import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import Font Awesome Icons

function Footer() {
  return (
    <footer className="bg-lightModeBg dark:bg-darkModeBg py-6 mt-6 border-[0.001rem] border-solid border-lightModeHeading dark:border-darkModeHeading">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a 
            href="https://github.com/SiddhiSingh07" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lightModeHeading dark:text-darkModeHeading hover:text-lightModeText dark:hover:text-darkmodeSpan transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/siddhi-singh07" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lightModeHeading dark:text-darkModeHeading hover:text-lightModeText dark:hover:text-darkmodeSpan transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://twitter.com/SiddhiSingh07" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lightModeHeading dark:text-darkModeHeading hover:text-lightModeText dark:hover:text-darkmodeSpan transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a 
            href="mailto:siddhisingh18102005@gmail.com" 
            className="text-lightModeHeading dark:text-darkModeHeading hover:text-lightModeText dark:hover:text-darkmodeSpan transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-lightModeText dark:text-darkModeText text-sm">
          <p>&copy; {new Date().getFullYear()} Siddhi Singh. All rights reserved.</p>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-lightModeHeading dark:text-darkModeHeading hover:text-lightModeText dark:hover:text-darkmodeSpan transition-colors text-sm"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
