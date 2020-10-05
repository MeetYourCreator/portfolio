import React from 'react'
import useStyles from './Projects.js'

import Layout from '../../components/shared/Layout/Layout.jsx'

export default function Projects() {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <div className={classes.projectsContainer}>Projects</div>
      </Layout>
    </>
  )

}