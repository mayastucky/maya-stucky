import React from "react";
import Header from "../components/Header";
import Portfolio from "../containers/Portfolio";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import CaseStudies from "../components/CaseStudies"



const Home = () => {
  return (
    <div>
      <Header/>
      <CaseStudies/>
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
