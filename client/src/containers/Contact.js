import React from "react";

const Contact = () => {
  return (
    <div>
      <main>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col" style={{ marginBottom: "100px" }}>
                  <h2
                    style={{
                      textAlign: "center",
                      marginTop: "100px",
                      marginBottom: "20px",
                    }}
                  >
                    Get in Touch
                  </h2>

                  <h5 style={{ textAlign: "center", color: "#3d405b" }}>
                    <a class="fancyclick" href="tel:316-708-6747">
                      (316) 708-6747
                    </a>
                  </h5>
                  <h5 style={{ textAlign: "center", wordWrap: "break-word" }}>
                    {" "}
                    <a class="fancyclick" href="mailto:mayaatstucky@gmail.com">
                      mayaatstucky@gmail.com
                    </a>
                  </h5>
                  <h5 style={{ textAlign: "center" }}>
                    <a class="fancyclick" href="https://github.com/mayastucky">
                      GitHub
                    </a>
                  </h5>
                  <h5 style={{ textAlign: "center" }}>
                    <a
                      class="fancyclick"
                      href="https://www.linkedin.com/in/maya-stucky-4453b0181/"
                    >
                      LinkedIn
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
