/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with the 'class' strategy

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkModeBg: '#0A192F', 
        darkModeHeading: '#64FFDA', 
        darkModeText: "#8892B0",
        darkmodeSpan : "#E6F1FF",
        darkModeBox : "#172A45",
        lightModeBg: '#F8F9FA',  
        lightModeText: '#030507',
        lightModeHeading : "#CC0088",
        lightModeBox: "#EC407A",
        //lightModeHeading : "#42A5F5",
        lightmodeSpan : "#bd258c",
        lightBlack : "#1F2937"// Custom light mode text (optional)
      },
    },
  },

  plugins: [],
}
