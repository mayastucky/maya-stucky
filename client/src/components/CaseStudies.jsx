import React from "react";
import UXBox from "../components/UXBox";
import Bounce from "react-reveal/Bounce";
import Maynooth from "../../src/maynooth.png";



const CaseStudies = () => {
  return (
    <div id="case-studies">
      <div className="container">
        <Bounce>
          <h2 id="user-experience-title">User Experience Projects</h2>
        </Bounce>
        <div className="row">
          <UXBox name="Maynooth Furniture" src={Maynooth} description= "Maynooth Furniture is my first User Experience project. Given a persona and a brief, I created a web application and a mobile application using my new Adobe XD skills. "></UXBox>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
