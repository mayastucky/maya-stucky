import React from "react";

const UXBox = (props) => {
  return (
    <div>
      <div className="col">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <figure className="figure">
            <img
              src={props.src}
              className="figure-img img-fluid rounded"
              alt={props.name}
              style={{
                width: "800px",
                height: "400px",
                textAlign: "center",
              }}
            />
          </figure>
          <h5 style={{ width: "800px", textAlign: "center" }}>
            {props.description}
          </h5>
        </div>

        <br></br>
        <a
          href={props.deployedLink}
          className="portfolioLink"
          style={{ textAlign: "center" }}
        >
          {/* <h5>Read More</h5> */}
        </a>
      </div>
    </div>
  );
};

export default UXBox;
