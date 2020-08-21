import React from "react";
import Bounce from "react-reveal/Bounce";

const Skills = () => {
  const styles = {
    icons: {
      fontSize: "3rem",
      margin: "10px",
    },
  };
  return (
    <div id="skills">
      <div className="container">
        <div class="row">
          <div class="col">
            <Bounce>
              <h2 style={{ textAlign: "center", marginTop: "100px" }}>
                Skills
              </h2>
            </Bounce>
            <div class="row row-centered" style={styles.icons}>
              <div class="col">
                <i class="fab fa-node" style={styles.icons}></i>
                <i class="fab fa-html5" style={styles.icons}></i>
                <i class="fab fa-react" style={styles.icons}></i>
                <i class="devicon-express-original" style={styles.icons}></i>
                <i class="devicon-mysql-plain" style={styles.icons}></i>
                <i
                  class="devicon-mongodb-plain-wordmark"
                  style={styles.icons}
                ></i>
                <i class="devicon-git-plain-wordmark" style={styles.icons}></i>
                <i class="devicon-github-plain" style={styles.icons}></i>
                <i class="devicon-heroku-original" style={styles.icons}></i>
                <i class="devicon-css3-plain-wordmark" style={styles.icons}></i>
                <i class="devicon-bootstrap-plain" style={styles.icons}></i>
                <i class="devicon-handlebars-plain" style={styles.icons}></i>
                <i
                  class="devicon-sketch-line-wordmark"
                  style={styles.icons}
                ></i>
                <i
                  class="devicon-trello-plain-wordmark"
                  style={styles.icons}
                ></i>
                <i
                  class="devicon-visualstudio-plain-wordmark"
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
