import React from 'react'
import Navebar from '../Components/Navebar'
import Footer from '../Components/Footer'
import Image2 from '../Components/Image2'
import AboutContent from '../Components/AboutContent'
const About = () => {
  return (
    <div>
       <Navebar/>
      <Image2 hading=" ABOUT" text="I'm a friendly Front-end Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
