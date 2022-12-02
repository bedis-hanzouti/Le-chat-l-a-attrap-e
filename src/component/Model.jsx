import React from 'react'
import { useEffect, useRef } from 'react'
import data from '../data/data'
//css
import "./model.css"
import Complications from './models/Complications'
import Depistage from './models/Depistage'
import Introduction from './models/Introduction'
import Prevention from './models/Prevention'
import Symptomes from './models/Symptomes'
import Traitement from './models/Traitement'

 const Model = ({id}) => {

    const details=data.find((ele,index)=>index+1===id)


    
  return (
    <div className="model">
        <i  style={{color:"black"}}class="fa-solid fa-down"></i>
        <div className="model__title">{details.title}</div>
            {details.title==="introduction"&&<Introduction content={details.content}/>}
            {details.title==="Symptome"&&<Symptomes />}
            {details.title==="Complications"&&<Complications />}
            {details.title==="Despistage"&&<Depistage />}
            {details.title==="Traitement"&&<Traitement />}
            {details.title==="Prevention"&&<Prevention />}
    </div>
  )
}
export default Model;