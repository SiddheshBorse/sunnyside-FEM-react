import React from 'react'
import facebook from "../assets/images/icon-facebook.svg"
import instagram from "../assets/images/icon-instagram.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pintrest from "../assets/images/icon-pinterest.svg"
import "../component_stylesheets/footer.css"
function Footer() {
  return (
      <div className="footer barlow-600">
          <h2 className="footer-title" >sunnyside</h2>
          <ul className="footer-links"  >
              <li className="footer-links-li">About</li>
              <li className="footer-links-li">Services</li>
              <li className="footer-links-li">Projects</li>
          </ul>
          <ul className="footer-socials">
              <li><img src={facebook} alt=""/></li>
              <li><img src={instagram} alt=""/></li>
              <li><img src={twitter} alt=""/></li>
              <li><img src={pintrest} alt=""/></li>
          </ul>
      </div>
  )
}

export default Footer