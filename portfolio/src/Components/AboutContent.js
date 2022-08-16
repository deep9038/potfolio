import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"
import pro3 from "../assats/project2.png"
import pro4 from "../assats/project1.png"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a font-end developer. i create responsive secure websites for my clients</p>
            <Link to="/Contact">
                <button className="btn">CONTACT</button>     
            </Link>       
        </div>
        <div className="right">
                <div className="img-cont">
                    <div className="img-stack top">
                        <img src={pro3} className="img" alt="true"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={pro4} className="img" alt="true"/>
                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default AboutContent
