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

        lightModeBg: '#FFFFFF',        // --color-background
        lightModeText: '#1B1C1B',      // --color-text
        lightModeHeading : "#4A62B0",  // --color-link
        lightModeBox: "#D3DEFA",       // --color-surface / --color-primary
        lightmodeSpan : "#3A4F96",     // --color-link-hover
        lightModeMuted: '#6B6E6A',     // --color-muted
        lightModeBorder: '#E4E8F2',    // --color-border
        lightModeSurface: '#F7F9FD',   // --color-surface
        lightBlack : "#1F2937"
      },
    },
  },

  plugins: [],
}
