import React from "react";
import Bounce from "react-reveal/Bounce";

const Skills = () => {
  const styles = {
    icons: {
      fontSize: "5rem",
      margin: "20px",
      textAlign: "center",
    },
  };
  return (
    <div id="skills">
      <div className="container">
        <div className="row">
          <div className="col">
            <Bounce>
              <h2 style={{ textAlign: "center", marginTop: "100px" }}>
                Skills
              </h2>
            </Bounce>
            {/* First row of icon */}
            <div className="row row-centered" style={styles.icons}>
              <div className="col center-align">
                <i className="fab fa-node" style={styles.icons}></i>
                <i className="fab fa-html5" style={styles.icons}></i>
                <i className="fab fa-react" style={styles.icons}></i>
                <i
                  className="devicon-express-original"
                  style={styles.icons}
                ></i>
                <i className="devicon-mysql-plain" style={styles.icons}></i>
              </div>
            </div>
            <div className="row row-centered" style={styles.icons}>
              <div className="col center-align">
                <i
                  className="devicon-mongodb-plain-wordmark"
                  style={styles.icons}
                ></i>
                <i
                  className="devicon-git-plain-wordmark"
                  style={styles.icons}
                ></i>
                <i className="devicon-github-plain" style={styles.icons}></i>
                <i className="devicon-heroku-original" style={styles.icons}></i>
                <i
                  className="devicon-css3-plain-wordmark"
                  style={styles.icons}
                ></i>
              </div>
            </div>
            <div className="row row-centered" style={styles.icons}>
              <div className="col center-align">
                <i className="devicon-bootstrap-plain" style={styles.icons}></i>
                <i
                  className="devicon-handlebars-plain"
                  style={styles.icons}
                ></i>
                <i
                  className="devicon-sketch-line-wordmark"
                  style={styles.icons}
                ></i>
                <i
                  className="devicon-trello-plain-wordmark"
                  style={styles.icons}
                ></i>
                <i
                  className="devicon-visualstudio-plain-wordmark"
                  style={styles.icons}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
