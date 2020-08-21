import React from "react";
import Header from "../components/Header";
import Portfolio from "../containers/Portfolio";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
