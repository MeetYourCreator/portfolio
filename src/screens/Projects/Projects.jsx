import React from 'react'
import './Projects.css'

import Layout from '../../components/shared/Layout/Layout.jsx'
import Project from '../../components/Project/Project.jsx'

import TwelveStepAlphabet from "../../Assets/NEW MASTER FOR RENDER.mp4"

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
          <Project />
          <Project />
        </div>
      </Layout>
    </>
  )

}