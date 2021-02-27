import React from 'react'
import '../App.js'
// import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>
        SOFTWARE ENGINEER 
      </h1>
      <p>Lets Change the World Together</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Contact Me
        </Button>
      </div> */}
    </div>
  )
}

export default HeroSection;