// import { useState } from 'react'
// import './App.css'

import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Education class="10th"/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
