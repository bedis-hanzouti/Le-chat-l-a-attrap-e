import React from 'react'
import { guideData } from '../data/data'

//css guide
import "./guide.css"
import GuideBox from './GuideBox'

const Guide = () => {
  return (
    <div className="guide__container">
      <div className="guide">
        <h1 className="guide__title">Les Commande Utilisés Dans cette Application</h1>
        {guideData.map((ele,index)=><GuideBox key={index} icon={ele.icon} commande={ele.commande} />)}
      </div>
    </div>
  )
}

export default Guide