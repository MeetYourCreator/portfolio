import React from 'react'
import './Project.css'
import Video from '../Video/Video.jsx'

const Project = ({
  src,
  title,
  description,
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
          Features include:
          <ul>
            <li>{descriptionFeature1}</li>
            <li>{descriptionFeature2}</li>
            <li>{descriptionFeature3}</li>
            <li>{descriptionFeature4}</li>
          </ul>
          <div classNAme="external-links">
            <a href={codeSRC}>View the Code</a>
            <a href={projectSRC}>View the Project</a>
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