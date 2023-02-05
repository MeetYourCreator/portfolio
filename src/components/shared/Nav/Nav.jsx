import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useStyles from "./Nav.js";

export default function Nav() {
  const classes = useStyles();

  return (
    <ul className={classes.navContainer}>
      <span className={classes.leftNav}>
        <motion.li
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255, 162, 190)",
            type: "tween",
          }}
        >
          <Link to="/" className={classes.navLink}>
            Rami Zackary Shamir
          </Link>
        </motion.li>
      </span>
      <span className={classes.rightNav}>
        <motion.li
          whileHover={{
            scale: 2,
            textShadow: "0px 0px 8px rgb(255, 162, 190)",
          }}
        >
          <Link to="/projects" className={classes.navLink}>
            Projects
          </Link>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 2,
            textShadow: "0px 0px 8px rgb(255, 162, 190)",
          }}
        >
          <Link to="/about" className={classes.navLink}>
            About
          </Link>
        </motion.li>
        <motion.li
          whileHover={{
            scale: 2,
            textShadow: "0px 0px 8px rgb(255, 162, 190)",
          }}
        >
          <Link to="/contact" className={classes.navLink}>
            Contact
          </Link>
        </motion.li>
      </span>
    </ul>
  );
}
