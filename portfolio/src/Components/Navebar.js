import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navebar-style.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navebar = () => {
  const [click, setclick] = useState(false);
  const handleclick = () => setclick(!click);
  const [color, setColor] = useState(false);
  const changColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } 
    else {
      setColor(false);
    }
  };
  window.addEventListener("scrool", changColor);
  return (
    <div className={ color ? "header header-bg" : "header "}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-manu active" : "nav-manu"}> 
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/About"}>About</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleclick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navebar;
