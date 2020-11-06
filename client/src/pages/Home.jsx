import React from "react";
import Header from "../components/Header";
import Portfolio from "../containers/Portfolio";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import About from "../components/About"



const Home = () => {
  return (
    <div>
      <Header/>
      {/* <About/> */}
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
