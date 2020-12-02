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
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 2,
          duration: 4,
        }}>
            <Video src={BackgroundVideo} />
            </motion.div>
        </div>
      </Layout>
    </>
  )
}
