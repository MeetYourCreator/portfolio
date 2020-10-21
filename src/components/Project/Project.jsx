import React from 'react'
import { motion } from 'framer-motion'
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
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            delay: 1,
            duration: 3,
          }}
          className="project-info"
        >
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
            <motion.a
              href={codeSRC}
              whileHover={{
                scale: 1.5,
                textShadow: "0px 0px 8px rgb(255,162,190)"
              }}
            >
              View Code
            </motion.a>{" "}
            ||
            <motion.a
              href={projectSRC}
              whileHover={{
                scale: 1.5,
                textShadow: "0px 0px 8px rgb(255,162,190)",
              }}
            >
              View Project
            </motion.a>
          </div>
        </motion.div>
        <motion.div className="project-video">
          <Video src={src} />
        </motion.div>
      </div>
    </>
  )
}

export default Project;