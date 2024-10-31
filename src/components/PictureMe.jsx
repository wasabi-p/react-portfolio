import React from "react";

const PictureMe = () => {
  return (
    <div className="project-details">
      <h3>Picture Me</h3>
      <a className="links" href="/project/picture-me">hosted?</a>
      <div className="github-section">
        <h4>github</h4>
        <div className="github-links">
          <a
            className="links"
            href="https://github.com/Dave-Turnbull/PictureMe-FE"
            target="new"
          >
            front
          </a>
          <a
            className="links"
            href="https://github.com/Dave-Turnbull/PictureMe-BE"
            target="new"
          >
            back
          </a>
        </div>
      </div>
    </div>
  );
};

export default PictureMe;
