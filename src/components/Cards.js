import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import AboutMe from '../images/AboutMe.jpeg'
import BlogsVlogs from '../images/Blogs:Vlogs.jpeg'
import pumpjack from '../images/pumpjack.jpeg'
import Code from '../images/Code.jpeg'

function Cards() {
  return (
    <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
            src={AboutMe}
            text='Who Am I?'
            label='About ME'
            path='/aboutmoi'
            />
            <CardItem 
            src={BlogsVlogs}
            text='Blogs/Vlogs'
            label='Literature?'
            path='/blogs-vlogs'
            />
            <CardItem 
            src={pumpjack}
            text='What I Did For Work'
            label='Experience'
            path='/professionalexperience'
            />
            <CardItem 
            src={Code}
            text='What I Like To Do!'
            label='Projects'
            path='/projects'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards