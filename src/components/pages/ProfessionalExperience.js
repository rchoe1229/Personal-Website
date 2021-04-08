import React from 'react'
import '../../App.css'
import './ProfessionalExperience.css'
import Halliburton from '../../images/Halliburton.jpg'
import CSM from "../../images/CSM.jpeg"

const knownTech = (
  "Ruby · JavaScript · React · Python · Redux · Node.js · Express.js · PostgreSQL · HTML · CSS"
)

export default function ProfessionalExperience() {
  return (
    <div className='Portfolio-Container'>
      <h1 className='Experience-Title'>Professional Experience</h1>
      <section  className="Tech">
        <h3 className="TechnologiesKnown">Technologies</h3>
        <p className="knownTech">{knownTech}</p>
      </section>
      <div className="Past">
      <section className="Halliburton">
        <img className="HalliburtonLogo" src={Halliburton} alt="Halliburton Logo"/>
        <section className="HalliburtonContent">
          <h3>Technical Professional (August 2019 - May 2020)</h3>
          <ul className="TP">
            <li>Dedicated crew lead engineer for Continental and XTO since November 2018</li>
              <p className="Dedicated">Oversaw simulation services and operations to ensure the job was completed to plan. 
                Managed 3 crews with varying employee sizes from 6-12 operation crew members in collaboration with 3-4 third party companies
                Maintained customer relations and thorough communication throughout the services delivered. 
                Delivered bi-weekly reports to customer as well as Post-Job efficiency reports.
                Provided insight on stimulation solutions to customer completion engineer to maximize production and efficiencies. 
                Improved our well swaps to under 15 mins consistently under OSHA and customer safety regulations. 
              </p>  
            <li>Headed the Murex acid campaign to enhance recovery in a water-flooded 
              field. Maintained thorough communication with customer engineer and multiple 
              service lines for tailored solutions utilizing various tools and designs to improve 
              recovery processes.</li>
              <br/>
            <li>Biocide Kill Efficiency in the Bakken Breakout Project</li>
            <p className="Biocide">Examined various biocides utilized in the Rockies region to examine their kill efficiencies and maximize 
            production for our customers. The project included the investigation of bacteria growth over a treatment span at multiple different 
            collection points with on-site water sources.</p>
          </ul>
          <h3>Associate Technical Professional (January 2018 - July 2019)</h3>
          <ul className="ATP">
            <li>Provided on the job support for Pressure Analysis and data collection throughout various stimulation services.</li>
            <p className="ATPJob">Achieved experience in Advanced Completion Method fracturing systems to improve production,
            sliding sleeve completions, gel based fracturing systems, slickwater fluid systems, high viscosity fluid systems, and 
            various acid stimulation designs  </p>
          </ul>
        </section>
      </section>
      <section className="CSM">
        <img className="CSMLogo" src={CSM} alt="CSM"/>
        <section className="CSMContent">
          <h3>Colorado School of Mines</h3>
          <ul className="School">
            <li>Bachelor of Science December 2017</li>
            <p className="generalInfo">Major: Petroleum Engineering</p>
            <li>Enhanced Oil Recovery</li>
            <p className="ExternshipDets">•	Through the collaboration between Colorado School of Mines and various companies an 
            Enhanced Oil Recovery (EOR) feasibility study was conducted for the DJ Basin reservoirs. The technical study included
            multiple stages such as data mining, technical training on EOR Technologies, reservoir simulations, and evaluations of 
            the oil recovery equation and specific topics related to unit pore-to-pore displacement efficiency and volumetric sweep 
            efficiency.</p>
          </ul>
        </section>
      </section>
      </div>
    </div>
  )
}
