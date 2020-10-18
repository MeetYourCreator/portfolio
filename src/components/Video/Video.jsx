import React from "react"
import "./Video.css"

const Video = ({src}) => {
  
  return (
    <>
      <div className='video'>
        <video autoPlay={true} muted={true} loop={true}>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Video
