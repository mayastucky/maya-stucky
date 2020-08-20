import React from "react";
import Header from "../components/Header"
import Portfolio from "../containers/Portfolio";
import Contact from "../containers/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
