import React from 'react'
import './Project.css'
import Video from '../Video/Video.jsx'

const Project = ({
  src,
  title,
  description,
  descriptionByline,
  descriptionFeature1,
  descriptionFeature2,
  descriptionFeature3,
  descriptionFeature4,
  codeSRC,
  projectSRC
}) => {
  return (
    <>
      <div className="project-container">
        <div className="project-info">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
          <p className="project-description-byline">{descriptionByline}</p>
          <span className="features-heading">Project highlights:</span>
          <ul>
            <li>{descriptionFeature1}</li>
            <li>{descriptionFeature2}</li>
            <li>{descriptionFeature3}</li>
            <li>{descriptionFeature4}</li>
          </ul>
          <div className="external-links">
            <a href={codeSRC}>View Code</a> ||
            <a href={projectSRC}>View Project</a>
          </div>
        </div>
        <div className="project-video">
          <Video src={src} />
        </div>
      </div>
    </>
  )
}

export default Project;