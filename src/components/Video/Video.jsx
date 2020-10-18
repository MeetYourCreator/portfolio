import React from "react"
import useStyles from "./Video.js"

const Video = ({src}) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.video}>
        <video autoPlay muted loop pointerEvents="none">
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Video
