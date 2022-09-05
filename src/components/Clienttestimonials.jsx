import React from 'react'
import emily from "../assets/images/image-emily.jpg"
import thomas from "../assets/images/image-thomas.jpg"
import jennie from "../assets/images/image-jennie.jpg"
import "../component_stylesheets/clienttestimonials.css"

function Clienttestimonials() {
  return (
      <div className="client-testimonials">
          <h1 className="fraunces-900">Client Testimonials</h1>
          <div className="clients">
              <div className="client">
                  <img src={emily} alt=""/>
                      <p className="barlow-600">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                      </p>
                      <div className="client-details">
                          <h2 className="fraunces-700">Emily R</h2>
                          <h3 className="barlow-600">Marketing Director</h3>
                      </div>
              </div>
              <div className="client">
                  <img src={thomas} alt=""/>
                      <p className="barlow-600" >Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and
                          enjoyable
                          experience.</p>
                      <div className="client-details">
                          <h2 className="fraunces-700">Thomas S</h2>
                          <h3 className="barlow-600">Chief Operating Officer</h3>
                      </div>
              </div>
              <div className="client">
                  <img src={jennie} alt=""/>
                      <p className="barlow-600">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                      <div className="client-details">
                          <h2 className="fraunces-700">Jennie F</h2>
                          <h3 className="barlow-600">Business Owner</h3>
                      </div>
              </div>
          </div>
      </div>
  )
}

export default Clienttestimonials