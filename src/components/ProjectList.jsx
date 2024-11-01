import React from "react";

const ProjectList = () => {
  return (
    <div className="project-list">
      <div className="project-section">
        <h2>northcoders</h2>
        <div className="project-links">
          <a href="/project/nc-news"> nc news & api</a>
          <a href="/project/picture-me">picture me! camera game</a>
        </div>
      </div>
      <a href="/project/portfolio">portfolio</a>
      <h4>...more coming soon</h4>
    </div>
  );
};

export default ProjectList;
