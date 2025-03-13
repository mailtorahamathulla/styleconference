import React from "react";
import Nav from "./Nav";
import "./App.css";
import Footer from "./Footer";
const Venue = () => {
  return (
    <div>
      <Nav />
      <section id="speakers">
        <h2 id="head2">Venue</h2>
        <p id="tag2">
          The conference is held at The Chicago Theatre, a beautiful historical
          landmark. The conference <br /> hotel, Four Seasons, is a short walk
          away down State Street.
        </p>
      </section>
      <section id="venue">
        <div id="season">
          <h4>Chicago Theatre</h4>
          <p>
            175 N State St <br /> Chicago, IL 60601
          </p>
          <br />
          <p>
            thechicagotheatre.com <br /> (312) 462-6300
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcbfad6!2schicago+theatre!5e0!3m2!1sen!2sus!4v1388701393606"
          frameborder="0"
          id="iframe1"
        ></iframe>
        <div id="theatre">
          <h4>Four Seasons</h4>
          <p>
            120 E Delaware <br /> PI Chicago, IL 60611
          </p>
          <br />
          <p>
            fourseasons.com <br /> (312) 280-8800
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcbfad6!2schicago+theatre!5e0!3m2!1sen!2sus!4v1388701393606"
          frameborder="0"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Venue;
