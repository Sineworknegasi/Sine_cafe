import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    </>
  )
}

export default App
