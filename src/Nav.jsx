import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Nav = () => {
  return (
    <>
      <section id="nav">
        <h1 id="logo">
          STYLES
          <br />
          CONFERENCE
        </h1>
        <p id="h2">August 24–26th — Chicago, IL</p>
        <div id="link">
          <Link to={"/Home"} class="link">
            Home
          </Link>
          <Link to={"/Speaker"} class="link">
            Speakers
          </Link>
          <Link to={"/Schedule"} class="link">
            Schedule
          </Link>
          <Link to={"/Venue"} class="link">
            Venue
          </Link>
          <Link to={"/Register"} class="link">
            Register
          </Link>
        </div>
      </section>
    </>
  );
};

export default Nav;
