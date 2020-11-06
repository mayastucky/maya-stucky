import React from "react";
// import Bounce from "react-reveal/Bounce";
import Resume from "../../src/Resume.pdf";

const Footer = () => {
  const styles = {
    icons: {
      margin: "20px",
    },
  };
  return (
    <div id="footerContent">
      <div style={{ marginBottom: "50px" }}>
        {/* <Bounce> */}
        <div id="resume">
          <h4
            style={{
              textAlign: "center",
              paddingTop: "100px",
              paddingBottom: "20px",
            }}
          >
            {" "}
            {`if you're interested, you can view my resume `}
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </h4>
        </div>
        <div id="contact">
          {/* <h4
            style={{
              textAlign: "center",
              paddingTop: "100px",
              paddingBottom: "20px",
            }}
          >
            contact
          </h4> */}
        </div>
        {/* </Bounce> */}
        <div className="text-center py-2">
          <p>
            {" "}
            {/* tel: */}
            {/* <a href="tel:316-708-6747"> */}
              {/* {" "} */}
              {/* 316-708-6747 */}
              {/* <i className="fas fa-mobile fa-5x"></i> */}
            {/* </a> */}
            <a
              href="https://www.linkedin.com/in/maya-stucky-4453b0181/"
              style={styles.icons}
            >
              linkedin
              {/* <i className="fa fa-linkedin-square fa-5x"></i> */}
            </a>
            <a href="https://github.com/mayastucky" style={styles.icons}>
              {/* <i className="fa fa-github fa-5x"> </i> */} github
            </a>
            email:
            <a href="mailto: mayaatstucky@gmail.com" style={{ margin: "5px" }}>
              {/* <i className="fa fa-google fa-5x"> </i> */}
              mayaatstucky@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
