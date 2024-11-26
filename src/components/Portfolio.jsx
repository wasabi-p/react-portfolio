import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="project-page-details">
        <h3 className="project-page-title">portfolio</h3>
        <a className="links" href="/">
          hosted
        </a>
        <a
          className="links"
          href="https://github.com/wasabi-p/portfolio"
          target="new"
        >
          github
        </a>
        <h4>react / javascript / css / html</h4>
      </div>
      <p>
        consider this a work in progress that i will be tweaking along my
        journey and changing up in line with my growth as a developer and
        designer.
      </p>
      <p>
        this website was constructed to showcase the bits and pieces of work
        i've been tinkering with to get to grips with software developing and
        the languages i've been exposed to so far. <br />
        all the styling and components have been made from scratch to better
        understand how css works properly.
        <br />
        <br />
        as the site grows i'll be refactoring it with reuseable components for
        good practice
      </p>
    </div>
  );
};

export default Portfolio;
