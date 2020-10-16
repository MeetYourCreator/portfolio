import React from 'react'
import useStyles from './Projects.js'
import TwelveStepAlphabet from '../../Assets/myc-portfolio_projects_12step.mp4'
import Layout from '../../components/shared/Layout/Layout.jsx'

export default function Projects() {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <div className={classes.projectsContainer}>
          <div className={classes.project}>
            <div className={classes.projectInfo}>
              <h1>12 Step Alphabet</h1>
              <p>
                Fullstack React + Rails 12-step recovery application and meeting
                guide for AA, CMA, NA, and ALANON
              </p>
              Features include:
              <ul>
                <li>
                  Dataset of 100,000+ entries for 12 step meetings in the
                  continental United States
                </li>
                <li>
                  Mapbox APIs to render full color maps for each meeting entry
                </li>
                <li>
                  Mapbox GeoLocation API for full geolocation functionality to
                  retrieve user location
                </li>
              </ul>
              <a
                href="https://www.github.com"
              >
                VIEW THE CODE
              </a>
            </div>
            <div className={classes.video}>
              <video autoPlay muted loop pointerEvents="none" width="575px">
                <source src={TwelveStepAlphabet} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )

}