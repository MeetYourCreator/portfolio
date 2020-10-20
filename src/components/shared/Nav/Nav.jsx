import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import useStyles from './Nav.js'

export default function Nav() {
  const classes = useStyles()
  
  return (
   
      <ul className={classes.navContainer}>
        <li>
          <Link to="/" className={classes.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className={classes.navLink}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className={classes.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={classes.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    
  )

}