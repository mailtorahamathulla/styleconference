import React from "react";
import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import img3 from "./assets/venue.jpg";
import img1 from "./assets/speakers.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img2 from "./assets/schedule.jpg";
const Home = () => {
  let handleevent = () => {};
  return (
    <div>
      <Nav />
      <section id="home">
        <article id="para1">
          Dedicated to the Craft of Building Websites
        </article>
        <article id="para2">
          Every year the brightest web designers and front-end developers
          descend on <br /> Chicago to discuss the latest tech logies. Join us
          this August!
        </article>
        <button id="reg">
          {" "}
          <Link to={"/Register"} class="link1">
            REGISTER NOW
          </Link>
        </button>
      </section>
      <div className="container" id="container">
        <div className="row">
          {/* card1 */}
          <div className="col-4">
            <div className="card border-0">
              <div className="card-title">Speakers</div>
              <div className="card-body">
                <img src={img1} alt="" className="img-fluid rounded-start" />
                <h5>World-Class Speakers</h5>
                <p style={{ fontSize: "Small" }}>
                  Joining us from all around the world are <br /> over twenty
                  fantastic speakers, here to <br /> share their stories.
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-4">
            <div className="card border-0">
              <div className="card-title">Schedule</div>
              <div className="card-body">
                <img src={img2} alt="" className="img-fluid rounded-start" />
                <h5>Three Inspiring Days</h5>
                <p style={{ fontSize: "Small" }}>
                  Enjoy three inspiring and action-packed <br /> days of tals,
                  gatherings, and all-around <br /> good times.
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-4">
            <div className="card border-0">
              <div className="card-title">Venue</div>
              <div className="card-body">
                <img src={img3} alt="" className="img-fluid rounded-start" />
                <h5>The Chicago Theater</h5>
                <p style={{ fontSize: "Small" }}>
                  Within the heart of downtown Chicago, <br /> The Chicago
                  Theatre will provide a <br /> beautiful conference venue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
