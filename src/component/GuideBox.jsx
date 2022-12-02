import React from 'react'

//css 
import './guideBox.css'

const GuideBox = ({icon,commande}) => {
  return (
    <div className="guide__box">
        <img src={`./assets/${icon}`} alt="" />
        <span>{commande}</span>
    </div>
  )
}

export default GuideBox