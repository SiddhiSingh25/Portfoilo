import './App.css'
import Nav from './Nav/Nav';
import Home from './Home/Home'
import React from "react";
import About from './About/About';
import Project from './Project/Project';
import Notes from './Notes/Notes'
import Education from './Education/Education';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
function App() {
  return (
    <>
    <div className= 'h-[100%] w-[100%] dark:bg-darkModeBg bg-lightModeBg'>
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