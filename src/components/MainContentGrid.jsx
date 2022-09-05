import React from 'react'
import egg from "../assets/images/desktop/image-transform.jpg"
import cup from "../assets/images/desktop/image-stand-out.jpg"
import "../component_stylesheets/maincontentgrid.css"


function MainContentGrid() {
  return (
      <div className="main-content-grid">
          <div className="transform-brand">
              <div className="text">
                  <h1 className="fraunces-900">Transform your brand</h1>
                  <p className="barlow-600">We are a full-service creative agency specializing in helping brands grow fast.
                      Engage your clients through compelling visuals that do most of the marketing for you.</p>
                  <div className="btn-div">
                      <div className="underline-div hovered">h</div>
                      <button className="fraunces-700">Learn more</button>
                  </div>
              </div>
          </div>
          <div className="egg">
              <img src={egg} alt=""/>
          </div>
          <div className="cup">
              <img src={cup} alt=""/>
          </div>
          <div className="audience">
              <div className="text">
                  <h1 className="fraunces-900">Stand out to the right audience</h1>
                  <p className="barlow-600">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll
                      build and
                      extend your brand in digital places.</p>
                  <div className="btn-div">
                      <div className="underline-div hovered">h</div>
                      <button className="fraunces-700">Learn more</button>
                  </div>
              </div>
          </div>
          <div className="hybrid-box">
              <h1 className="fraunces-900 absolute">Graphic design</h1>
              <p className="barlow-600 absolute">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential
                  clients’ attention.</p>
          </div>
          <div className="hybrid-box">
              <h1 className="fraunces-900 absolute">Photography</h1>
              <p className="barlow-600 absolute">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
              </p>
          </div>
      </div>
  )
}

export default MainContentGrid