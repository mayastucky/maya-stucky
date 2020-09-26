import React from "react";

const NoMatch = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>404: Page not found. 🧐 </h1>
      <h2>
        {" "}
        <a href="https://mayastucky.com">Take Me Home!</a>
      </h2>
    </div>
  );
};

export default NoMatch;
