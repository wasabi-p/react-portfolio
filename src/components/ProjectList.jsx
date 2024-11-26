import React from "react";

const ProjectList = () => {
  return (
    <div className="project-list">
      <div className="project-list-section">
        <h2>tech returners</h2>
        <div className="project-list-links">
        <a href="/project/eventapp">eventapp</a>
        </div>
      </div>
      <div className="project-list-section">
        <h2>northcoders</h2>
        <div className="project-list-links">
          <a href="/project/nc-news"> nc news & api</a>
          <a href="/project/picture-me">picture me! camera game</a>
        </div>
      </div>
      <div className="project-list-section">
        <h2>personal</h2>
        <div className="project-list-links">
      <a href="/project/portfolio">portfolio</a>
      </div>
      </div>
      <h4>more coming soon...</h4>
    </div>
  );
};

export default ProjectList;
