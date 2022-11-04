import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CTA from './components/CTA'
import Services from './components/Services'

function App() {
  return (
    <div className="m-0 p-0 font-serif">
      <Navbar />
      <Hero />
      <div className="mt-4">
      <CTA />
      </div>
      <Services />
    </div>
  )
}

export default App
