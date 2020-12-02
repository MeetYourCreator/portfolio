import React from "react"
import { motion } from 'framer-motion'
import "./Home.css"
import Layout from "../../components/shared/Layout/Layout.jsx"
import Video from "../../components/Video/Video.jsx"

import BackgroundVideo from "../../Assets/myc_rami-zackary-shamir_portfolio_video-bckgrd.mp4"

export default function Home() {
  return (
    <>
      <Layout>
        <div className="video">
            <motion.div
            animate={{
              opacity: [0, 0.15, .25, 0.3,.5, 0.5, 0.65, .75, 0.85, 1],
              scale: [8,7,6,5,4,3,2,1]
            }}
            initial={{
              opacity: 0,
              scale: 18
            }}
        transition={{
          duration: 4,
        }}>
            <Video src={BackgroundVideo} />
            </motion.div>
        </div>
      </Layout>
    </>
  )
}