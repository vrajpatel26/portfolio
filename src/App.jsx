import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <main className="pt-20">
        <Hero />
         <About />
         <Skills/>
         <Projects />
         <Education/>
         <Contact/>
      </main>
    </>
  )
}

export default App