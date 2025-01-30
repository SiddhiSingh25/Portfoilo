import { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";
function ThemeChanger({className}){
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' ? true : false;
      });
    
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    
      useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      }, [darkMode]);
    return(
      <button onClick={toggleDarkMode} className='ml-4 theme flex items-center justify-center p-2'>
      {darkMode ? (
          <CiLight className={`text-darkModeHeading w-6 h-6 transition-transform duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`} />
      ) : (
          <CiDark className={`text-lightModeHeading w-6 h-6 transition-transform duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`} />
      )}
  </button>
    )
}

export default ThemeChanger