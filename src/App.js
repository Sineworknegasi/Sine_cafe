import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Coffee from './Components/Coffee/Coffee'
import Gallary from './Components/Gallary/Gallary'
import Review from './Components/Review/Review'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Coffee/>
    <Gallary/>
    <Review/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App
