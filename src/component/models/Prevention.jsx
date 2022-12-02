import React from 'react'

//css
import './prevention.css'

const Prevention = () => {
  return (
    <div className="prevention">
        {/* <iframe src="https://www.youtube.com/watch?v=Id9SUm_pcEg"></iframe> */}
        <video className="prevention__video" src="./assets/video.mp4" autoPlay controls></video>
    </div>
  )
}

export default Prevention