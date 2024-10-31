import React from "react";
import ProjectList from "./ProjectList";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import PictureMe from "./PictureMe";
import { Routes, Route } from "react-router-dom";
import NcNews from "./NcNews";
import Portfolio from "./Portfolio";

const Main = () => {
  return (
    <div className="main-container">
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/me" element={<AboutMe />} />
          <Route path="/project/nc-news" element={<NcNews />} />
          <Route path="/project/picture-me" element={<PictureMe />} />
          <Route path="/project/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
