import React from "react";

const AboutMe = () => {
  return (
    <div className="me-container">
      <div className="me-details">
        <h3>about me</h3>
        <h4>
          i am still very new to software development but i'm trying to find a
          direction to pursue that satisfies my creative itch and utilises my
          problem solving skills in equal measure
        </h4>
        <h3>the tech i use</h3>
      <h4>
        javascript <span className="heart">|</span> typescript{" "}
        <span className="heart">|</span> html <span className="heart">|</span>{" "}
        css <span className="heart">|</span> react{" "}
        <span className="heart">|</span> react native{" "}
        <span className="heart">|</span> node.js{" "}
        <span className="heart">|</span> postgres{" "}
        <span className="heart">|</span> supabase
      </h4>
      </div>
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
