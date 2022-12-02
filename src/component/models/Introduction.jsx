import React from 'react'

//css
import './introduction.css'

const Introduction = ({content}) => {
  return (
    <div className="introduction">
        <img className="ask__img" src="./assets/ask.png" />
        <div className="intro">C'est Quoi Le VIH ?</div>
        <p className="content">{content}</p>
        <img src="./assets/vih.jpg" alt="" className="vih__img" />
    </div>
  )
}

export default Introduction