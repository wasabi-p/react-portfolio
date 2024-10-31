import React from "react";

const NcNews = () => {
  return (
    <div className="project-details">
      <h3>NC News API</h3>
      <a className="links" href="/project/nc-news">
        hosted
      </a>
      <div className="github-section">
        <h4>github</h4>
        <div className="github-links">
        <a
          className="links"
          href="https://github.com/wasabi-p/fe-nc-news"
          target="new"
        >
          front
        </a>
        <a
          className="links"
          href="https://github.com/wasabi-p/be-nc-news-project"
          target="new"
        >
          back
        </a>
        </div>
      </div>
    </div>
  );
};

export default NcNews;
