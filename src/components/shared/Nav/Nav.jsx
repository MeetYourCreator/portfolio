import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import useStyles from "./Nav.js"

export default function Nav() {
  const classes = useStyles()

  return (
    <ul className={classes.navContainer}>
      <motion.li
        whileHover={{
          scale: 1.5,
          textShadow: "0px 0px 8px rgb(255, 162, 190)",
          type: "tween",
        }}
      >
        <Link to="/" className={classes.navLink}>
          Home
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.5,
          textShadow: "0px 0px 8px rgb(255, 162, 190)",
        }}
      >
        <Link to="/projects" className={classes.navLink}>
          Projects
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.5,
          textShadow: "0px 0px 8px rgb(255, 162, 190)",
        }}
      >
        <Link to="/about" className={classes.navLink}>
          About
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.5,
          textShadow: "0px 0px 8px rgb(255, 162, 190)",
        }}
      >
        <Link to="/contact" className={classes.navLink}>
          Contact
        </Link>
      </motion.li>
    </ul>
  )
}
