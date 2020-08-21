import React from "react";

const Footer = () => {
  const styles = {
    icons: {
      margin: "20px",
    },
  };
  return (
    <div id="contact">
      <div style={{ marginBottom: "50px" }}>
        <h3
          style={{
            textAlign: "center",
            paddingTop: "100px",
            paddingBottom: "20px",
          }}
        >
          Get in Touch!
        </h3>
        <div class="text-center py-2">
          <a href="tel:316-708-6747" style={styles.icons}>
            <i class="fas fa-mobile fa-5x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/maya-stucky-4453b0181/"
            style={styles.icons}
          >
            <i class="fa fa-linkedin-square fa-5x"></i>
          </a>
          <a href="https://github.com/mayastucky" style={styles.icons}>
            <i class="fa fa-github fa-5x"> </i>
          </a>
          <a href="mailto: mayaatstucky@gmail.com" style={styles.icons}>
            <i class="fa fa-google fa-5x"> </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
