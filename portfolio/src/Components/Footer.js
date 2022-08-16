import "./Footer.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem" }}/>
                    <div>
                        <p>Shyamnagar , Malakerpara</p>
                        <p>west bengal</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem" }}/>
                    - 9038440784 </h4>
                             
                </div>
                <div className="mail">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem" }}/>
                    deep22sarkar@gmail.com </h4>
                             
                </div>

            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This it's me Deep.learning  react while doing this project</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"2rem" }}/>
                <FaInstagram size={30} style={{color:"#fff",marginRight:"2rem" }}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"2rem" }}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
