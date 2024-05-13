import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='Hero_section'>
        <div className='container text_hero_section'>
            <div className='row'>
            <div className='col-lg-7 col-md-7 col-sm-12'>
                <div className='Hero_content'>
                <p className='fs-3 text-white fw-bold'>NOW YOU CAN FEEL THE ENERGY</p>
                <p className=' display-1 text-white fw-bold'>Start your day with a black Coffee</p>
                <btn className=" btn btn-light text-dark fw-bold w-50 p-3 rounded-5">BUY NOW</btn>
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
