import "./Image.css";
import React from "react";
import imge from "../assats/intro-bg.jpg";
import { Link } from "react-router-dom";
const Image = () => {
  return (
    <div className="image">
      <div className="mask">
        <img className="intro-img" src={imge} alt="background" />
      </div>
      <div className="content">
        <p>HI,I'M A FRONT_END ENGGINER</p>
        <h1>React Project</h1>
        <div>
          <Link to="/Projects" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Image;
