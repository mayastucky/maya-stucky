import React from "react";

const Contact = () => {
  return (
    <div>
      <main id = "contact">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="row">
                <div class="col">
                  <h2>Contact</h2>
                  <h5 style={{textAlign: "center", color: "#3d405b"}}>
                    {" "}
                    (316) 708-6747
                  </h5>
                  <h5 style={{textAlign: "center", wordWrap:"break-word"}}>
                    {" "}
                    <a class="fancyclick" href="mailto:mayaatstucky@gmail.com">
                      mayaatstucky@gmail.com
                    </a>
                  </h5>
                  <h5 style={{textAlign: "center"}}>
                    <a class="fancyclick" href="https://github.com/mayastucky">
                      GitHub
                    </a>
                  </h5>
                  <h5 style={{textAlign: "center"}}>
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
