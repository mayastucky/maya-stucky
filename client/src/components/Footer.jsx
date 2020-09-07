import React from "react";
import Bounce from "react-reveal/Bounce";
import Resume from "../../src/Resume.pdf";

const Footer = () => {
  const styles = {
    icons: {
      margin: "20px",
    },
  };
  return (
    <div id = "footerContent">
      <div style={{ marginBottom: "50px" }}>
        <Bounce>
          <div id="resume">
            <h3
              style={{
                textAlign: "center",
                paddingTop: "100px",
                paddingBottom: "20px",
              }}
            >
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </h3>
          </div>
          <div id="contact">
            <h3
              style={{
                textAlign: "center",
                paddingTop: "100px",
                paddingBottom: "20px",
              }}
            >
              Get in Touch!
            </h3>
          </div>
        </Bounce>
        <div className="text-center py-2">
          <a href="tel:316-708-6747" style={styles.icons}>
            <i className="fas fa-mobile fa-5x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/maya-stucky-4453b0181/"
            style={styles.icons}
          >
            <i className="fa fa-linkedin-square fa-5x"></i>
          </a>
          <a href="https://github.com/mayastucky" style={styles.icons}>
            <i className="fa fa-github fa-5x"> </i>
          </a>
          <a href="mailto: mayaatstucky@gmail.com" style={styles.icons}>
            <i className="fa fa-google fa-5x"> </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
