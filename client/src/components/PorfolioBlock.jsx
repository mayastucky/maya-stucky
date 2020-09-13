import React from "react";

const PortfolioBlock = (props) => {
  const styles = {
    imageSize: {
      width: "400px",
      height: "300px",
    },
    captions: {
      color: "#650D1B",
      marginBottom: "30px",
      textAlign: "center",
    },

    links: {
      // color: "#6D597A"
      color: "#1B263B",
    },
  };

  return (
    <div className="col-sm">
      <figure className="figure">
        <img
          src={props.src}
          className="figure-img img-fluid rounded"
          alt={props.alt}
          style={styles.imageSize}
        />
        {/* <figcaption
          className="figure-caption"
          style={styles.captions}
        >
          {props.name}
          <a href={props.deployedLink} style={styles.links}> Site </a>
          <a href={props.githubLink} style={styles.links}> GitHub </a>
        </figcaption> */}
      </figure>
      <br></br>
      <a
        href={props.deployedLink}
        style={styles.links}
        className="portfolioLink"
      >
        <h2>{props.name}</h2>
      </a>
      {/* <h2>{props.name}</h2> */}
      <p>{props.description}</p>
      <br></br>
      <p><strong>Tools: </strong>{props.tools}</p>

      <br />
      <a href={props.githubLink} style={styles.links} className="portfolioLink">
        {" "}
        Code{" "}
      </a>
  
    </div>
  );
};

export default PortfolioBlock;
