import "./PricingCard.css"
import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
          <div className="card">
              <h3>- Basic -</h3>
              <span className="bar"></span>
              <p className="btc">$ 100</p>
              <p>- 3 day -</p>
              <p>- 3 pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <Link to="/Contact" className="btn">PURCHASH NOW</Link>
          </div>
          <div className="card">
              <h3>- premium -</h3>
              <span className="bar"></span>
              <p className="btc">$ 500</p>
              <p>- 3 day -</p>
              <p>- 6 pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <Link to="/Contact" className="btn">PURCHASH NOW</Link>
          </div>
          <div className="card">
              <h3>- premium -</h3>
              <span className="bar"></span>
              <p className="btc">$ 500</p>
              <p>- 3 day -</p>
              <p>- 6 pages -</p>
              <p>- Featured -</p>
              <p>- Responsive Design -</p>
              <Link to="/Contact" className="btn">PURCHASH NOW</Link>
          </div>
      </div>
    </div>
  )
}

export default PricingCard
