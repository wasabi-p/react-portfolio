import React from "react";

const NcNews = () => {
  return (
    <div>
      <div className="project-details">
        <h3 className="project-title">nc news website & server api</h3>
        <div className="github-section">
          <h4>github{" >>>"}</h4>
          <div className="github-links">
            <a
              className="links"
              href="https://github.com/wasabi-p/fe-nc-news"
              target="new"
            >
              front-end
            </a>
            <a
              className="links"
              href="https://github.com/wasabi-p/be-nc-news-project"
              target="new"
            >
              back-end
            </a>
          </div>
        </div>
        <h4>
          react / javascript / css / html / express / sql / husky / supertest /
          jest / tailwind
        </h4>
      </div>
      <p>
        a solo full stack project I worked on during the northcoders bootcamp
        that i was given two weeks to work on
      </p>
      <p>
        we were given two weeks to construct an api that was capable of handling
        get/ post/ patch and to integrate that with a front-end website to
        display the server results.
      </p>
      <p>
        i was able to satisfy the mvc (minimum viable product) within the
        deadline but the product would need further tweaking to give a better
        user experience and allow for longevity, i looked into a bespoke user
        authentication to improve the experience
      </p>
    </div>
  );
};

export default NcNews;
