import React from "react"
import { motion } from "framer-motion"
import useStyles from "./Layout.js"
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 3,
          duration: 6,
        }}
      >
        <Header />
      </motion.div>
      </header>
      <div className={classes.layoutChildren}>{children}</div>
      <Footer />
    </div>
  )
}
