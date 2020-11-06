import React from "react";
import Bounce from "react-reveal/Bounce";
import NavBar from "../components/NavBar";
import Maya from "../../src/maya.jpg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="container">
      <NavBar style={{ textAlign: "center" }} />
      <div style={{ padding: "40px" }}></div>

      <Bounce>
        <h2 id="about" style={{ textAlign: "center", padding: "20px" }}>
          hey, there!
        </h2>
      </Bounce>
      <Fade right>
        <h3>i'm maya. </h3>
        {/* <img src={Maya} alt="Maya Stucky" height="400px" width="350px" /> */}
        <h5>i'm a philly based web developer and ux designer.</h5>
      </Fade>
    </div>
  );
};

export default About;
