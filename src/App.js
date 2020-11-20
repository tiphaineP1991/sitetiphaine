import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Projects from "./containers/Projects";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Header from "./components/header";
import ForceFemmes from "./containers/ForceFemmes";
import JimmyFairly from "./containers/JimmyFairly";
import ResCo from "./containers/ResCo";
import MaBoite from "./containers/MaBoite";
import Bayon from "./containers/Bayon";
import VerslEmploi from "./containers/VerslEmploi";

const App = () => {
  const [page, setPage] = useState("projects");
  const [projectName, setProjectName] = useState("null");
  return (
    <Router>
      <div className="App">
        <div className="Container">
          <Header setPage={setPage} page={page} />
          <Switch>
            <Route path={"/details"}>
              {projectName === "forcefemmes" ? <ForceFemmes /> : null}
              {projectName === "jimmyfairly" ? <JimmyFairly /> : null}
              {projectName === "resco" ? <ResCo /> : null}
              {projectName === "bayon" ? <Bayon /> : null}
              {projectName === "maboite" ? <MaBoite /> : null}
              {projectName === "verslemploi" ? <VerslEmploi /> : null}
            </Route>
            <Route path="/">
              {page === "projects" ? (
                <Projects setProjectName={setProjectName} />
              ) : null}
              {page === "about" ? <About setPage={setPage} /> : null}
              {page === "contact" ? <Contact /> : null}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
