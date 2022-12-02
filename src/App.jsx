import React, {useState,useRef} from "react"
import { useCallback } from "react"
import { useEffect } from "react"
import Box from "./component/Box"
import Guide from "./component/Guide"
import Model from "./component/Model"
import data from "./data/data"
//css
import "./index.css"
 const App = () => {

  const [currentBox, setCurrentBox]=useState(0)
  const [showModel, setShowModel]=useState({status:false,id:0})

  const [showGuide, setShowGuide]=useState(true)



  const keyEventHandler=useCallback(event=>{
      const key=event.key
      console.log(key)
      if(showGuide){
        if(key==="ArrowDown"){
          setShowGuide(prev=>false)
        }
      }
      if(key==="Control"){
        setShowGuide(true)
        console.log("ok")
      }
      if(key==="ArrowRight"){

        setCurrentBox(prev=>prev+1)
        console.log(currentBox)
      }
      if(key==="ArrowLeft"){

        setCurrentBox(prev=>prev-1)
      }
      if(key==="Enter"){
        const boxList=Array.from(document.querySelectorAll(".box"))
        const id=boxList.find(ele=>ele.className.includes("activeBox")).getAttribute("data-id");
        setShowModel(prev=>{
          return {status:true,id:Number(id)+1}
        })
      }
      if(key==="Escape"){
        setShowModel(prev=>{
          return {status:false,id:0}
        })
      }
    },[])
  
  

    useEffect(_=>{
      window.addEventListener("keyup",keyEventHandler)
      return ()=>{
        window.removeEventListener("keyup",keyEventHandler)
      }
    },[])



  return (
    
      <div className="container">
        {showGuide&&<Guide />}
        <h1 className="title">Guide Du VIH</h1>
        <div className="box__container">
          {showModel.status&&!showGuide&&<Model id={showModel.id} />}
          {data.map((ele,index)=><Box data-id={index} className={`box ${currentBox===index&&"activeBox"}`} boxInfo={ele} key={index} />)}
        </div>
      </div>

  )
}

export default App ;