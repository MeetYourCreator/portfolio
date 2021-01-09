import React from "react"
import "./Projects.css"
import Layout from "../../components/shared/Layout/Layout.jsx"
import Project from "../../components/Project/Project.jsx"
import TwelveStepAlphabet from "../../Assets/NEW MASTER FOR RENDER.mp4"
import NewAlternatives from "../../Assets/new-alternatives-vid.mp4"
import NYTimes from "../../Assets/myc_nytimes-widget.mov"

export default function Projects() {
  return (
    <>
      <Layout>
        <div className="projects-container">
          <Project
            src={TwelveStepAlphabet}
            title="12 Step Alphabet"
            description="Fullstack React on Rails"
            descriptionByline="12 Step Recovery Application"
            descriptionFeature1="Dataset of 100,000+ entries create a comprehensive meeting directory for Alcoholics Anonymous, Crystal Meth Anonymous, Narcotics Anonymous, and ALANON."
            descriptionFeature2="Mapbox APIs render full color maps for each meeting entry, Mapbox GeoLocation API retrieve user location, and  Mapbox Directions API provide full navigation functionality."
            descriptionFeature3="Full CRUD functionality allow users to post, edit, and delete reviews of their favorite (and not-so-favorite) 12 step meetings."
            codeSRC="https://bit.ly/12step_gh"
            projectSRC="https://bit.ly/12step_app"
          />
          <Project
            src={NewAlternatives}
            title="New Alternatives"
            description="MERN Stack Front to Back"
            descriptionByline="Revamp of website for NYC non-profit"
            descriptionFeature1="Worked with a design team to translate wire-frames into a scalable high fidelity, front-end architecture."
            descriptionFeature2="Optimized the delivery of code assets to browsers across a wide spectrum of devices."
            descriptionFeature3="Seemless integratation of MongoDB, Express, React, and Node.js to implement full CRUD functionality."
            codeSRC="https://bit.ly/newAlt_gh"
            projectSRC="https://bit.ly/newAlt_site"
          />
          <Project
            src={NYTimes}
            title="NYT News Widget"
            description="Vanilla JavaScript News Widget"
            descriptionByline="Up-to-the-minute stories from the New York Times"
            descriptionFeature1="No libraries. No modules. No frameworks. 100% vanilla JavaScript/HTML/CSS NYT news widget."
            descriptionFeature2="Utilizes New York Times 'Times Wire API' to retrieve up-to-the-minute stream of nytimes articles."
            descriptionFeature3="Implementation of CSS Grid and CSS Flexbox."
            codeSRC="http://bit.ly/gh-nytwidget"
            projectSRC="http://bit.ly/nytimes-widget"
          />
        </div>
      </Layout>
    </>
  )
}
