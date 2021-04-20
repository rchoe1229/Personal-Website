import React from 'react'
import '../../App.css'
import Portrait from '../../images/Portrait.jpeg'

export default function AboutMe() {
  return (
    <div className='AboutMe-Container'>
      <div className='Image-Container'>
        <img className='portrait' src={Portrait} alt="My Img..."/>
        <div className='Content-Container'>
          <h3 className='Content-Title'>Ryan Choe</h3>
          <br/>
          <p className='Content'>
            I am a full-stack software engineer, currently enrolled in FlatIron School to expand my horizons 
            and dive into the Tech Industry. I previously worked as a Technical Professional in Production Enhancement
            at Halliburton Energy Services.
          <br/>
          <br/>
            When I am not building fun projects, I love to snowboard, hike, and play video games! I am also a huge foodie
            and love exploring new places to eat! I was born and raised in Colorado, moved to North Dakota for 2.5 years, 
            and now currently back in Denver, CO.
          <br/>
          <br/>
          </p>
          <h3 className='email-container'>
              Lets change the world together!
            <br/>
            <a href="mailto:ryan.choe@outlook.com">Contact Me!</a>
            {/* <p>ryan.choe@outlook.com</p> */}
          </h3>
        </div>
      </div>
    </div>
  )
}
