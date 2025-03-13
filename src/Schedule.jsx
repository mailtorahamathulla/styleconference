import React from "react";
import Nav from "./Nav";
import "./App.css";
import Footer from "./Footer";
const Schedule = () => {
  return (
    <div>
      <Nav />
      <section id="speakers">
        <h2 id="head2">Schedule</h2>
        <p id="tag2">
          The conference opens with amazing workshops and continues with two
          days of incredible talks and <br /> keynotes, all of which are
          facilitated by industry-leading experts.
        </p>
      </section>
      <section id="events">
        <table>
          <tr>
            <td style={{ textAlign: "right" }}>
              <h4>Workshops</h4>
            </td>
            <td class="line">August 24th</td>
            <td class="line"></td>
          </tr>

          <tr>
            <td style={{ textAlign: "right" }}>8.30 AM</td>
            <td class="line">Registration</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>9:00 AM</td>
            <td class="line">
              <p>Adam Connor</p>
              <p>
                Lights! Camera! Interaction! Design Inspiration <br /> from
                Filmmakers
              </p>
            </td>
            <td class="line">
              <p>Jennifer Jones</p>
              <p>What Designers Can Learn from Parenting</p>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>12.30 PM </td>
            <td class="line">Lunch</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>2.00 PM</td>{" "}
            <td class="line">
              <p>Tessa Harmon</p>
              <p>Crafty Coding: Generating Knitting Patterns</p>
            </td>
            <td class="line">
              <p>Russ Unger</p>
              <p>
                From Muppets to Mastery: Core UX Principles from Mr. Jim Henson
              </p>
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td style={{ textAlign: "right" }}>
              <h4>Conference</h4>
            </td>
            <td class="line">August 25th</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>8:30 AM</td>
            <td class="line"> Registration</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>9.00 Am</td>
            <td class="line">
              Vitaly Friedman <br /> Responsive Web Design: Clever Tips and
              Techniques
            </td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>10:00 AM</td>
            <td class="line">Morning Break</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>10:30 AM</td>
            <td class="line">
              Shay Howe <br /> Less is More: How Constraints Cultivate Growth
            </td>
            <td class="line">
              Jenn Downs <br /> What’s Stopping You?
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>11:30 AM</td>
            <td class="line">
              Carolyn Chandler <br /> The Business of Play
            </td>
            <td class="line">
              Chris Mills <br /> Heavy Metal Coding
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>12.30 Pm</td>
            <td class="line">Lunch</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>2:00 PM</td>
            <td class="line">
              Zoe Mickley Gillenwater <br /> Leveling Up with Flexbox
            </td>
            <td class="line">
              Darby Frey <br /> Building a Mobile Layout
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>3.00 PM</td>
            <td class="line">
              Brad Smith <br /> What Designers and Strategists Can Learn from
              Dick Fosbury
            </td>
            <td class="line">
              Erica Decker <br /> What Disney Can Teach You about User
              Experience Design
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>4:00 PM</td>
            <td class="line"> Afternoon Break</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>4:30 PM</td>
            <td class="line">
              Estelle Weyl <br /> Select This!
            </td>
            <td class="line"></td>
          </tr>
          <br />
          <br />
          <tr>
            <td style={{ textAlign: "right" }}>
              <h4>Conference</h4>
            </td>
            <td class="line">August 26th</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>8:30 AM</td>
            <td class="line"> Registration</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>9.00 Am</td>
            <td class="line">
              Aaron Irizarry <br /> Designing a Culture of Design
            </td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>10:00 AM</td>
            <td class="line">Morning Break</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>10:30 AM</td>
            <td class="line">
              Jen Myers <br /> Teaching Our CSS to Play Nice
            </td>
            <td class="line">
              JAJ Self <br /> (You Should Be) Testing Your JavaScript
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>11:30 AM</td>
            <td class="line">
              Dan Denney <br />
              Creating HTML Emails Can Be Fun
            </td>
            <td class="line">
              Maya Bruck <br /> So You Want to Be a Unicorn
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>12.30 Pm</td>
            <td class="line">Lunch</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>2:00 PM</td>
            <td class="line">
              Victoria Pater <br /> Excellent Tacos Are Not Created in a Vacuum
            </td>
            <td class="line">
              Arman Ghosh <br /> Designing Deals: How Good Design Drives Sales
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>3.00 PM</td>
            <td class="line">
              Bermon Painter <br /> Death to Wireframes: Long Live Rapid
              Prototyping
            </td>
            <td class="line">
              Candi Lemoine <br />
              Making Remote Development Work
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>4:00 PM</td>
            <td class="line"> Afternoon Break</td>
            <td class="line"></td>
          </tr>
          <tr>
            <td style={{ textAlign: "right" }}>4:30 PM</td>
            <td class="line">
              E Dr. Leslie Jensen-Inman <br /> Designing to Learn
            </td>
            <td class="line"></td>
          </tr>
        </table>
      </section>
      <Footer />
    </div>
  );
};

export default Schedule;
