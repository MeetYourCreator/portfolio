import React from "react"
import useStyles from "./Video.js"
import BackgroundVideo from "../../Assets/myc_rami-zackary-shamir_portfolio_video-bckgrd.mp4"

const Video = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.video}>
        <video autoPlay muted loop pointerEvents="none">
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Video
