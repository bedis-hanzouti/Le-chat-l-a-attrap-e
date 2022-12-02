import React from 'react'

//css
import "./box.css"

const Box = (props) => {
    const {boxInfo}=props;

  return (
    <div {...props}>
        <img className="box__icon" src={`./assets/${boxInfo.icon}`} alt="box img"/>
        <span className="box__title" style={{color:"black"}}>{boxInfo.title}</span>
    </div>
  )
}

export default Box