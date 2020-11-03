import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Projects from "./containers/Projects";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Header from "./components/header"

const App = () => {
  const [page, setPage] = useState("projects")
  return (
    <Router>
      <div className="App">
        <div className="Container">
          <Switch>
            <Route path="/">
              <Header setPage={setPage} page={page}/>
              {page === "projects" ? <Projects/> : null}
              {page === "about" ? <About/> : null}
              {page === "contact" ? <Contact/> : null}
          </Route>
          </Switch>  
        </div>
      </div>
    </Router>
  );
};

export default App;
