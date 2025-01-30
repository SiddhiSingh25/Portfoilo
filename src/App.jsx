import './App.css'
import Nav from './Nav/Nav';
import Home from './Home/Home'
import React from "react";
import About from './About/About';
import FunFact from './FunFact.jsx/FunFact';
import Project from './Project/Project';
import Notes from './Notes/Notes'
import Education from './Education/Education';
import Contact from './Contact/Contact';
function App() {
  return (
    <>
    <div className= 'h-[100%] w-[100%] dark:bg-darkModeBg bg-lightModeBg'>
    <Nav/>
    <Home/>
    <About/>
    <FunFact/>
    <Project/>
    <Notes/>
    <Education/>
    <Contact/>
    </div>
    </>
  )
}

export default App