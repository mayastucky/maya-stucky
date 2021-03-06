import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log("I see you snooping!")
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
