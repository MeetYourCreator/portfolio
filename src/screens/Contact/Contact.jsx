import React from "react";
import "./Contact.css";
import Email from "../../Assets/email-logo.png";
import LinkedIn from "../../Assets/LinkedIn-icon.png";
import GitHub from "../../Assets/github-logo.png";
import Layout from "../../components/shared/Layout/Layout.jsx";

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="about-container">
          <a href="mailto:rzshamir@icloud.com">
            <img
              className="social"
              src={Email}
              alt="Email: rzshamir@icloud.com"
            />
          </a>
          <a href="https://www.linkedin.com/in/ramizackaryshamir/">
            <img
              className="social"
              src={LinkedIn}
              alt="LinkedIn: in/ramizackaryshamir"
            />
          </a>
          <a href="https://github.com/MeetYourCreator">
            <img
              className="social"
              src={GitHub}
              alt="GitHub: MeetYourCreator"
            />
          </a>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
