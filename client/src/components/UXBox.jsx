import React from "react";

const UXBox = (props) => {
  const styles = {
    imageSize: {
      width: "400px",
      height: "300px",
      textAlign: "center",
      justifyContent: "center",
      marginTop: "20px",
    },

    links: {
      // color: "#6D597A"
      color: "#1B263B",
    },

    description: {
      marginBottom: "20px",
      textAlign: "center",
      justifyContent: "center",
      maxWidth: "400px",
    },
  };

  return (
    <div className="row">
      <div className="col" style={{ textAlign: "center" }}>
        <figure className="figure">
          <img
            src={props.src}
            style={styles.imageSize}
            className="figure-img img-fluid rounded"
            alt={props.alt}
          />
        </figure>
        <br></br>
        <div style={styles.description}>
          <h2>{props.name}</h2>

          <p>{props.description}</p>
          <br></br>

          <br />

          <br></br>
        </div>
      </div>
    </div>
  );
};

export default UXBox;
