import React from 'react'
import '../../App.css'
import Resume from '../../images/Resume.jpg'

export default function ProfessionalExperience() {
  return (
    <div className='Portfolio-Container'>
      <h1 className='Experience-Title'>Professional Experience</h1>
      <img className='Resume' src={Resume} alt="No Exp..."/>
    </div>
  )
}
