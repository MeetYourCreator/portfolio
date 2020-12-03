import React from "react"
import "./Contact.css"
import LinkedIn from "../../Assets/LinkedIn-icon.png"
import GitHub from "../../Assets/github-logo.png"
import Layout from "../../components/shared/Layout/Layout.jsx"

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="about-container">
          <div className="info">
            <h1 className="name">Rami Zackary Shamir</h1>
            <h2 className="email">ramizackshamir@icloud.com</h2>
          </div>
          <aside className="social">
            <a href="https://www.linkedin.com/in/ramizackaryshamir/">
              <img className="linkedin" src={LinkedIn} />
            </a>
            <a href="https://github.com/MeetYourCreator">
              <img className="github" src={GitHub} />
            </a>
          </aside>
        </section>
      </Layout>
    </>
  )
}

export default Contact
