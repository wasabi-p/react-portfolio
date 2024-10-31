import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h3>me</h3>
      <h4>
        i am still very new to programming/ software development and i'm trying
        to find my feet and a direction to pursue that satisfies my creative
        itch and utilises my problem solving skills in equal measure but
        thoroughly enjoying the learning process
      </h4>
      <h3>the tech</h3>
      <h4>
        javascript | typescript | html | css | react | react native | node.js{" "}
      </h4>
      <h3>likes</h3>
      <h4>❥ video games ❥ japan ❥ food ❥ travel ❥ photography</h4>
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
