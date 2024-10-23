import React from "react";
import ProjectList from "./ProjectList";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import ProjectPage from "./ProjectPage";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-container">
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/me" element={<AboutMe />} />
          <Route path="/project/:project_id" element={<ProjectPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
