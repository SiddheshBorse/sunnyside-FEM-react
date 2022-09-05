import React from 'react'
import milkbottles from "../assets/images/desktop/image-gallery-milkbottles.jpg"
import orange from "../assets/images/desktop/image-gallery-orange.jpg"
import cone from "../assets/images/desktop/image-gallery-cone.jpg"
import sugarcubes from "../assets/images/desktop/image-gallery-sugarcubes.jpg"
import "../component_stylesheets/imagegrid.css"

function Imagegrid() {
  return (
      <div class="image-grid">
          <img src={milkbottles} alt=""/>
              <img src={orange} alt=""/>
                  <img src={cone} alt=""/>
                      <img src={sugarcubes} alt=""/>
        </div>
  )
}

export default Imagegrid