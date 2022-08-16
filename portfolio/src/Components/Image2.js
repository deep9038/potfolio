import "./Image2.css"
import React from 'react'

const Image2 = (props) => {
  return (
    <div className="image">
        <div className="hading">
            <h1>{props.hading}</h1>
            <p>{props.text}</p>
        </div>
      
    </div>
  )
}

export default Image2
