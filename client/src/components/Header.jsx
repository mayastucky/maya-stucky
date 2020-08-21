import React from "react";
import { Spring } from "react-spring/renderprops";

const Header = () => {
  return (
    <div id="heading">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ friction: 250 }}
          >
            {(props) => (
              <div style={{ marginTop: "200px" }}>
                <h1 id="heading" class="display-4" style={props}>
                  Maya Stucky
                </h1>
                <p class="lead" style={props}>
                  Hi there! I'm Maya! I'm a recent graduate of Georgia Tech’s
                  Full Stack Web Development Bootcamp. I enjoy detail-oriented
                  front-end web development, prioritizing users and
                  accessibility and am hoping to branch into UX/UI. Because of
                  my background in art history, I am passionate about design and
                  aesthetics and creating visually stunning websites.
                </p>
              </div>
            )}
          </Spring>
        </div>
      </div>
    </div>
  );
};

export default Header;
