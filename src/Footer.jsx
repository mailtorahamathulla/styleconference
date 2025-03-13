import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Footer = () => {
  return (
    <div id="footer">
      <section id="sec"></section>
      <span id="tagline">© Styles Conference</span> <span id="gap"></span>
      <Link to={"/Home"} class="flink">
        Home
      </Link>
      <Link to={"/Speaker"} class="flink">
        Speakers
      </Link>
      <Link to={"/Schedule"} class="flink">
        Schedule
      </Link>
      <Link to={"/Venue"} class="flink">
        Venue
      </Link>
      <Link to={"/Register"} class="flink">
        Register
      </Link>
    </div>
  );
};

export default Footer;
