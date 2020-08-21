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
    <div id="heading">
      <NavBar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ friction: 250 }}
          >
            {(props) => (
              <div style={{ marginTop: "200px" }}>
                <h1 id="heading" className="display-4" style={props}>
                  Maya Stucky
                </h1>
              </div>
            )}
          </Spring>{" "}
          <p className="lead">
            <Fade right>
              Hi there! I'm Maya! I'm a recent graduate of Georgia Tech’s Full
              Stack Web Development Bootcamp. I enjoy detail-oriented front-end
              web development, prioritizing users and accessibility. I am hoping
              to branch into the world of UX/UI. Because of my background in art
              history, I am passionate about design and aesthetics and creating
              visually stunning websites.
            </Fade>
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
