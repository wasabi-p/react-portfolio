import React from "react";

const EventApp = () => {
  return (
    <div>
      <div className="project-page-details">
        <h2 className="project-page-title">eventapp & api</h2>
        <div className="github-section">
          <h4>github{" >>>"}</h4>
          <div className="github-links">
            <a
              className="links"
              href="https://github.com/wasabi-p/event-app"
              target="new"
            >
              project
            </a>
          </div>
        </div>
        <h4>typescript / css / html / supabase / postgres / expo</h4>
      </div>
      <p>
        a solo full stack project I worked on for techreturners as a "freelance"
      </p>
      <p>
        we were given four weeks to construct an app that was capable of
        handling get/ post/ patch and to integrate that with either a pre-made api or one we constructed ourselves.
        the app needed user authentication intregrated into it as part of the minimum viable product.
      </p>
      <p>
        i was able to satisfy the mvc (minimum viable product) within the
        deadline but made further tweaks to satisfy the needs of the client.
        the product does however need further development to allow better
        filtering of the database GET requests to narrow down the search for the
        end user and provide a better experience overall when browsing events.
      </p>
    </div>
  );
};

export default EventApp;
