import React from 'react'
import useStyles from './About.js'

import Layout from '../../components/shared/Layout/Layout.jsx'
import Adbusters103 from '../../Assets/press_adbusters_103.png'
import Breitbart from "../../Assets/press_breitbart.png"
import Printmag from "../../Assets/press_printmag.png"
import WSJ from "../../Assets/press_wsj.png"

export default function About() {
  const classes = useStyles();

  return (
    <>
      <Layout>
        <div className={classes.aboutContainer}>
          <h1>About</h1>
          <div className={classes.press}>
            <h2>Press</h2>
            <div>
              <img src={Adbusters103} className={classes.image} />
            </div>
            <div>
              <img src={Breitbart} className={classes.image} />
            </div>
            <div>
              <img src={Printmag} className={classes.image} />
            </div>
            <div>
              <img src={WSJ} className={classes.image} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )

}