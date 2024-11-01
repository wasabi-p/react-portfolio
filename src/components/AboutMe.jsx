import React from "react";

const AboutMe = () => {
  return (
    <div className="me-content">
      <h3>about me</h3>
      <h4>
        i am still very new to software development but i'm trying
        to find a direction to pursue that satisfies my creative
        itch and utilises my problem solving skills in equal measure
      </h4>
      <h3>the tech i use</h3>
      <h4>
        javascript | typescript | html | css | react | react native | node.js{" "}
      </h4>
      <h3>likes</h3>
      <h4>
        <span className="heart">❥</span> computers{" "}
        <span className="heart">❥</span> video games{" "}
        <span className="heart">❥</span> japan <span className="heart">❥</span>{" "}
        food <span className="heart">❥</span> travel{" "}
        <span className="heart">❥</span> photography
      </h4>
      <h3>contact</h3>
      <ul>
        <li>
          <a className="links" href="https://github.com/wasabi-p" target="new">
            github
          </a>
        </li>
        <li>
          <a
            className="links"
            href="https://www.linkedin.com/in/paul-shoreman-844806306"
            target="new"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            className="links"
            href="mailto:paul.shoreman@outlook.com"
            target="new"
          >
            mail
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
