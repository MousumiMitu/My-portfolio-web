import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import About from "./Components/About/About";
import NavBlogs from "./Components/NavBlogs/NavBlogs";
import Contact from "./Components/Contact/Contact";
import NavContact from "./Components/NavContact/NavContact";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blogs">
          <NavBlogs />
        </Route>
        <Route path="/contact">
          <NavContact />
        </Route>
        <Route path="/projects">
          <ProjectDetails />
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
