import React, {useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header"
import Portfolio from "./containers/Portfolio"

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="App">
    <Header/>
    <Portfolio/>
  </div>;
}

export default App;
