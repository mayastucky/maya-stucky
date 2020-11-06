import React from "react";
import { Spring } from "react-spring/renderprops";
import Fade from "react-reveal/Fade";
import NavBar from "./NavBar";

const Header = () => {
  //https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  return (
    <div className="jumbotron jumbotron-fluid">
      <NavBar style={{ textAlign: "center" }} />
      <div id="heading">
        <div className="container">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ friction: 250 }}
          >
            {(props) => (
              <div style={{ marginTop: "200px" }}>
                <h1 id="heading" className="display-4" style={props}>
                  hey, there! i'm maya.
                </h1>
              </div>
            )}
          </Spring>{" "}
          <p className="lead">
            <Fade right>i'm a philly based web developer and ux designer.</Fade>
          </p>
          {/* <Flip right>
            <a href="#portfolio">
              <button type="button" classNameName="btn" style={styles.button}>
                Learn More
              </button>
            </a>
          </Flip> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
