import React from "react";
import PortfolioBlock from "../components/PorfolioBlock";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h2 id="projects">Projects</h2>
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
            description="Maestro is designed to be a meeting platform between remote learners and educators. It allows learners to have the school experience remotely. It is a fully functioning CRUD application, in that an educator can create an account, login in to see their dashboard, update the information as well as delete."
          ></PortfolioBlock>
          {/* Eat The Burger */}
          <PortfolioBlock
            src="https://github.com/mayastucky/13-gt-burger/raw/master/app.png"
            alt="Eat The Burger"
            name="Eat The Burger"
            githubLink="https://github.com/mayastucky/13-gt-burger"
            deployedLink="https://vast-badlands-50775.herokuapp.com/burgers"
            description='This fun application takes burgers stored in a MySQL database and allows the user to add their own favorite burgers to that database or devour burgers and change their state to "devoured!"'
          ></PortfolioBlock>
          {/* Note Taker */}
          <PortfolioBlock
            src="https://github.com/mayastucky/gt-11-note-taker-final/raw/master/notetaker.png"
            alt="Note Taker"
            name="Note Taker"
            githubLink="https://github.com/mayastucky/gt-11-note-taker-final"
            deployedLink="https://enigmatic-retreat-96846.herokuapp.com/"
            description="This application uses express to create an online note taker that allows the user to create and delete their notes and have them saved into a database."
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
            description="This application is designed to help busy people organize their work days. It uses Moment.js and local storage to keep track of the hours in the day and tasks to be completed."
          ></PortfolioBlock>
          {/*  */}
          <PortfolioBlock
            src="https://github.com/mayastucky/gt-project-1/raw/master/assets/images/EntertainMeMain.png"
            alt="Entertain Me"
            name="Entertain Me"
            githubLink="https://github.com/mayastucky/gt-project-1"
            deployedLink="https://mayastucky.github.io/gt-project-1/"
            description="As we go through our time in quarantine, we have run out of ideas for what to do to pass the time. This application is designed to aid in the search of something new to do and will give you YouTube videos on how to get started. "
          ></PortfolioBlock>
          {/* Password Generator */}
          <PortfolioBlock
            src="https://github.com/mayastucky/gt-hw3-password-generator/raw/master/app.png"
            alt="Password Generator"
            name="Password Generator"
            githubLink="https://github.com/mayastucky/gt-hw3-password-generator"
            deployedLink="https://mayastucky.github.io/gt-hw3-password-generator/"
            description="This program takes a user's desired password length and criteria and outputs a randomized and secure password for protecting themselves and their information."
          ></PortfolioBlock>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
