import React from "react"
import "./Projects.css"
import Layout from "../../components/shared/Layout/Layout.jsx"
import Project from "../../components/Project/Project.jsx"
import TwelveStepAlphabet from "../../Assets/NEW MASTER FOR RENDER.mp4"
import NewAlternatives from "../../Assets/new-alternatives-vid.mp4"
import NYTimes from "../../Assets/myc_nytimes.png"

export default function Projects() {
  return (
    <>
      <Layout>
        <div className="projects-container">
          <Project
            src={TwelveStepAlphabet}
            title="12 Step Alphabet"
            description="Fullstack React + Rails"
            descriptionByline="12 Step Recovery Application"
            descriptionFeature1="Dataset of 100,000+ entries for 12 step meetings in the
              continental United States"
            descriptionFeature2="Mapbox APIs to render full color maps for each meeting entry"
            descriptionFeature3="Mapbox GeoLocation API to retrieve user location and  Mapbox Directions API provide full navigation functionality"
            descriptionFeature4="Full CRUD functionality for users to post, edit, and delete reviews of their favorite (and not-so-favorite) 12 step meetings"
            descriptionFeature5="Comprehensive meeting directory for Alcoholics Anonymous, Crystal Meth Anonymous, Narcotics Anonymous, and ALANON"
            codeSRC="https://bit.ly/12step_gh"
            projectSRC="https://bit.ly/12step_app"
          />
          <Project
            src={NewAlternatives}
            title="New Alternatives"
            description="Fullstack MERN"
            descriptionByline="Revamp of website for NYC non-profit"
            descriptionFeature1="High Fidelity build of UX Team design concept"
            descriptionFeature2="Scope of implementing carousels in React on display with four distinct carousel iterations"
            descriptionFeature3="Proficient knowledge of git and github workflows in collaboration of four member dev team"
            descriptionFeature4="Seemless integratation of MongoDB, Express, React, and Node.js to implement full CRUD functionality"
            descriptionFeature5="Implementation of CSS Flexbox"
            codeSRC="https://bit.ly/newAlt_gh"
            projectSRC="https://bit.ly/newAlt_site"
          />
          <Project
            src={NYTimes}
            title="NYT News Widget"
            description="Vanilla javascript news widget using the NYT API"
            descriptionByline="Up-to-the-minute stories from the New York Times"
            descriptionFeature1="No libraries. No modules. No frameworks. 100% vanilla JavaScript/HTML/CSS NYT news widget."
            descriptionFeature2="Utilizes New York Times 'Times Wire API' to retrieve up-to-the-minute stream of nytimes articles."
            descriptionFeature3=""
            descriptionFeature4=""
            descriptionFeature5=""
            codeSRC="http://bit.ly/gh-nytwidget"
            projectSRC="http://bit.ly/nytimes-widget"
          />
        </div>
      </Layout>
    </>
  )
}
