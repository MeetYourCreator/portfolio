import React from "react"
import useStyles from "./Layout.js"
import Header from "../Header/Header.jsx"
// import Footer from "../Footer/Footer.jsx"

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.layoutChildren}>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}
