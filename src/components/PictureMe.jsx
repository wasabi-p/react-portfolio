import React from "react";

const PictureMe = () => {
  return (
    <div>
      <div className="project-page-details">
        <h3 className="project-page-title">picture me! camera game</h3>
        <div className="github-section">
          <h4>github{" >>>"}</h4>
          <div className="github-links">
            <a
              className="links"
              href="https://github.com/Dave-Turnbull/PictureMe-FE"
              target="new"
            >
              front-end
            </a>
            <a
              className="links"
              href="https://github.com/Dave-Turnbull/PictureMe-BE"
              target="new"
            >
              back-end
            </a>
          </div>
        </div>
        <h4>
          expo / react native / typescript / css / html / socket.io / jest
        </h4>
      </div>
      <p>
        a group project i worked on during the course of the northcoders
        bootcamp that we had 1 and a half weeks to complete.
      </p>
      <p>
        the task was to construct an app that utilised new technologies we
        weren't accustomed to and to work as a team to accomplish it
        <br /> we settled on the idea of a party game and to try and utilise our
        phone's various in-built technologies in order to create a fun
        experience. the game is played in rounds and each player would recieve a
        prompt and have to take a picture that fit the brief they recieved. This
        picture would then be anonymously posted to other players in the game
        and they would have to guess who took the picture. top marks for correct
        guesses.
      </p>
      <p>
        the mvc was achieved and the core of the app worked as expected, with
        further development we wanted to add more integration of other elements
        such as sound recordings and expand the round types for a more
        well-rounded experience.
      </p>
    </div>
  );
};

export default PictureMe;
