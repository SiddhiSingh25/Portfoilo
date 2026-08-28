import './App.css'
import Nav from './Nav/Nav';
import Home from './Home/Home'
import React, { useState } from "react";
import About from './About/About';
import Project from './Project/Project';
import Notes from './Notes/Notes'
import Education from './Education/Education';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Preloader from './Common/Preloader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />
      <div className={`h-[100%] w-[100%] dark:bg-darkModeBg bg-lightModeBg transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-90'}`}>
        <Nav/>
        <Home/>
        <About/>
        <Project/>
        <Notes/>
        <Education/>
        <Testimonials/>
        <Contact/>
      </div>
    </>
  )
}

export default App