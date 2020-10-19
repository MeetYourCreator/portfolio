import React from 'react'
import './Projects.css'

import Layout from '../../components/shared/Layout/Layout.jsx'
import Project from '../../components/Project/Project.jsx'

import TwelveStepAlphabet from "../../Assets/NEW MASTER FOR RENDER.mp4"
import NewAlternatives from "../../Assets/new-alternatives-vid.mp4"

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
            descriptionFeature3="Mapbox GeoLocation API for full geolocation functionality to retrieve user location"
            descriptionFeature4="Comprehensive meeting directory for Alcoholics Anonymous, Crystal Meth Anonymous, Narcotics Anonymous, and ALANON"
            codeSRC="https://github.com/crimethinkWithMe/twelve-step-alphabet/tree/develop"
            projectSRC=""
          />
          <Project
            src={NewAlternatives}
            title="New Alternatives"
            description="Fullstack MERN"
            descriptionByline="Revamp of website for NYC non-profit"
            descriptionFeature1="High Fidelity build of UX Team design concept"
            descriptionFeature2="Scope of implementing carousels in React on display with four distinct carousel iterations"
            descriptionFeature3="Proficient knowledge of git and github workflows in collaboration of four member dev team"
            descriptionFeature4="Seemless integratation of MongoDB, Express, React, and Nodemon to implement full CRUD functionality"
          />
          <Project
            src={NewAlternatives}
            title="Frankenpol"
            description="React + Airtable API"
            descriptionByline="Frankenstein political figures rendered with the press of a button"
            descriptionFeature1="High Fidelity build of UX Team design concept"
            descriptionFeature2="Scope of implementing carousels in React on display with four distinct carousel iterations"
            descriptionFeature3="Proficient knowledge of git and github workflows in collaboration of four member dev team"
            descriptionFeature4="Seemless integratation of MongoDB, Express, React, and Nodemon to implement full CRUD functionality"
          />
        </div>
      </Layout>
    </>
  )

}