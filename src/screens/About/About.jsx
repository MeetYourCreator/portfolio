import React from 'react'
import useStyles from './About.js'

import Layout from '../../components/shared/Layout/Layout.jsx'
import Printmag from "../../Assets/press_printmag.png"
import HuffingtonPost from "../../Assets/press_huffingtonpost.png"
import Adbusters103 from '../../Assets/press_adbusters_103.png'
import Breitbart from "../../Assets/press_breitbart.png"
import WSJ from "../../Assets/press_wsj.png"
import TranslatingAnarchy from "../../Assets/press_translating-anarchy.png"

export default function About() {
  const classes = useStyles();

  return (
    <>
      <Layout>
        <div className={classes.aboutContainer}>
          <h1>About</h1>
          <div className={classes.press}>
            <h2>Press</h2>
            <div className={classes.pressBox}>
              <img src={Printmag} className={classes.image} />
            </div>
            <div className={classes.pressBox}>
              <img src={HuffingtonPost} className={classes.image} />
            </div>
            <div className={classes.pressBox}>
              <img src={Adbusters103} className={classes.image} />
            </div>
            <div className={classes.pressBox}>
              <img src={Breitbart} className={classes.image} />
            </div>
            <div className={classes.pressBox}>
              <img src={WSJ} className={classes.image} />
            </div>
            <div className={classes.pressBox}>
              <img src={TranslatingAnarchy} className={classes.image} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )

}