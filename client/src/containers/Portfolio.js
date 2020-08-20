import React from "react";
import PortfolioBlock from "../components/PorfolioBlock";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="row">
          {/* <h2 style={{color:"#D5896F", marginTop: "20px"}}>Portfolio</h2> */}
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          {/* Maestro */}
          <PortfolioBlock
            src="https://github.com/mayastucky/gt-project-2/raw/master/public/img/maestro-screenshot.png"
            alt="Maestro Application"
            name="Maestro"
            githubLink="https://github.com/mayastucky/gt-project-2"
            deployedLink="https://secure-shelf-55938.herokuapp.com/"
          ></PortfolioBlock>
          {/* Eat The Burger */}
          <PortfolioBlock
            src="https://github.com/mayastucky/13-gt-burger/raw/master/app.png"
            alt="Eat The Burger"
            name="Eat The Burger"
            githubLink="https://github.com/mayastucky/13-gt-burger"
            deployedLink="https://vast-badlands-50775.herokuapp.com/burgers"
          ></PortfolioBlock>
          {/* Note Taker */}
          <PortfolioBlock
            src="https://github.com/mayastucky/gt-11-note-taker-final/raw/master/notetaker.png"
            alt="Note Taker"
            name="Note Taker"
            githubLink="https://github.com/mayastucky/gt-11-note-taker-final"
            deployedLink="https://enigmatic-retreat-96846.herokuapp.com/"
          ></PortfolioBlock>
        </div>

        <div className="row">
          {/* Daily Planner */}
          <PortfolioBlock
            src="https://github.com/mayastucky/gt-hw-5-daily-planner/raw/master/screenshot.png"
            alt="Daily Planner"
            name="Daily Planner"
            githubLink="https://github.com/mayastucky/gt-11-note-taker-final"
            deployedLink="https://enigmatic-retreat-96846.herokuapp.com/"
          ></PortfolioBlock>
          {/*  */}
          <PortfolioBlock
            src="https://github.com/mayastucky/gt-project-1/raw/master/assets/images/EntertainMeMain.png"
            alt="Entertain Me"
            name="Entertain Me"
            githubLink="https://github.com/mayastucky/gt-project-1"
            deployedLink="https://mayastucky.github.io/gt-project-1/"
          ></PortfolioBlock>
          {/* Password Generator */}
          <PortfolioBlock
            src="https://github.com/mayastucky/gt-hw3-password-generator/raw/master/app.png"
            alt="Password Generator"
            name="Password Generator"
            githubLink="https://github.com/mayastucky/gt-hw3-password-generator"
            deployedLink="https://mayastucky.github.io/gt-hw3-password-generator/"
          ></PortfolioBlock>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
