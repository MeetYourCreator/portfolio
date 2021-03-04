import React from "react"
import { motion } from "framer-motion"
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
              opacity: [0, 0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95, 1],
              scale: [
                8,
                7.75,
                7.5,
                7.25,
                7,
                6.75,
                6.5,
                6.25,
                6,
                5.75,
                5.5,
                5.25,
                5,
                4.75,
                4.5,
                4.25,
                4,
                3.75,
                3.5,
                3.25,
                3,
                2.75,
                2.5,
                2.25,
                2,
                1.75,
                1.5,
                1.25,
                1,
              ],
            }}
            initial={{
              opacity: 0,
              scale: 18,
            }}
            transition={{
              duration: 4,
            }}
          >
            <Video src={BackgroundVideo} />
          </motion.div>
        </div>
      </Layout>
    </>
  )
}