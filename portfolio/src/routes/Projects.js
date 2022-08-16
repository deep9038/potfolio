import React from 'react'
import Navebar from '../Components/Navebar'
import Footer from '../Components/Footer'
import Image2 from '../Components/Image2'
import PricingCard from '../Components/PricingCard'
import Work from '../Components/Work'
const Projects = () => {
  return (
    <div>
      <Navebar/>
      <Image2 hading=" my projects" text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Projects
