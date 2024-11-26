import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectList from "./ProjectList";
import Nav from "./Nav";
import AboutMe from "./AboutMe";
import PictureMe from "./PictureMe";
import NcNews from "./NcNews";
import Played from"./Played"
import Portfolio from "./Portfolio";
import EventApp from "./EventApp";

const Main = () => {
  return (
    <div className="main-container">
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProjectList/>}/>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/me" element={<AboutMe />} />
          <Route path="/project/eventapp" element={<EventApp/>}/>
          <Route path="/project/nc-news" element={<NcNews />} />
          <Route path="/project/picture-me" element={<PictureMe />} />
          <Route path="/project/portfolio" element={<Portfolio />} />
          <Route path="/played" element={<Played/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
