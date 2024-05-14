import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='Hero_section'>
        <div className='container text_hero_section'>
            <div className='row'>
            <div className='col-lg-7 col-md-7 col-sm-12'>
                <div className='Hero_content'>
                <h6 className='text-white text-uppercase'>NOW YOU CAN FEEL THE ENERGY</h6>
                <h1 className='display-4 text-white fw-semibold py-3'>Start your day with <br /> a black Coffee</h1>
                <btn className=" btn btn-light text-dark fw-normal  w-25 p-2 rounded-5">BUY NOW</btn>
            </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>

            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
