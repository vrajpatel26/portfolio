import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

const App = () => {
  return (
    <>
    <Navbar/>
    <main className="pt-20">
        <Hero />
         <About />
         <Skills/>
      </main>
    </>
  )
}

export default App