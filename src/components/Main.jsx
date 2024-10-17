import React from "react";
import ProjectList from "./ProjectList";
import ProjectPage from "./ProjectPage";
import AboutMe from "./AboutMe";
import Nav from "./Nav";

const Main = () => {

  
  return <div className="main">
    <Nav/>
    <div className="main-container">
    <ProjectList/>
    </div>
  </div>;
};

export default Main;
