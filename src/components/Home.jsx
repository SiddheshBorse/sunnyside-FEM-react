import React from 'react'
import "../component_stylesheets/home.css"
import Arrow from "../assets/images/icon-arrow-down.svg"

function Home() {
  return (
          <div className="home">
              <nav>
                  <div id="companyname" className="barlow-600">sunnyside</div>
                  <ul className="barlow-600">
                      <li>
                          <div className="lihoverdiv">About</div>
                      </li>
                      <li>
                          <div className="lihoverdiv">Services</div>
                      </li>
                      <li>
                          <div className="lihoverdiv">Projects</div>
                      </li>
                      <li>
                          <div className="lihoverdiv">Contact</div>
                      </li>
                  </ul>
              </nav>
              <h1 className="tagline fraunces-900">We are creatives</h1>
              <img src={Arrow} alt="arrowdown"/>
          </div>
  )
}

export default Home