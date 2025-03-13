import React from "react";
import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import img1 from "./assets/aaron.jpg";
import img2 from "./assets/adam.jpg";
import img3 from "./assets/aj.jpg";
import img4 from "./assets/arman.jpg";
import img5 from "./assets/bermon.jpg";
import img6 from "./assets/shay.jpg";

const Speakers = () => {
  return (
    <>
      <Nav />
      <section id="speakers">
        <h2 id="head2">Speakers</h2>
        <p id="tag2">
          We’re happy to welcome over twenty speakers to present on the
          industry’s latest technologies. <br />
          Prepare for an inspiration extravaganza.
        </p>
      </section>
      <section id="details">
        <div id="content">
          <div id="aaron">
            <h5>Aaron Irizarry</h5>
            <p>Designing a Culture of Design</p>
            <br />{" "}
            <aside>
              <img src={img1} alt="#" class="speaker" />
              <p class="info">
                @aaroni <br />
                thisisaaronslife.com
              </p>
            </aside>
            <p>
              Workplace culture doesn’t start with beanbags, foosball tables, or
              a beer fridge, and it doesn’t end with neckties, PCs, or big
              corporations. It’s the unwritten rules, behavior, beliefs, and the
              motivations that enable good work to get done, or it’s what
              stifles a workforce. For design to be most effective and for
              designers to feel valued, we need to work in a culture that
              embraces design and allows it to succeed.
            </p>
            <br />
            <p>
              In Aaron’s session he will explore how to recognize the traits of
              organizations that *get* design, both large and small. He will
              share what those teams, departments, and companies have that
              others don’t, and more importantly, how to begin to change your
              own workplace’s culture. Once you’ve worked within a culture of
              design it’s almost impossible to imagine yourself anywhere else.
            </p>
            <br />
            <h6>About Aaron</h6>
            <p>
              Aaron Irizarry is a Senior Product Designer for Nasdaq OMX, a
              lover of heavy metal, a foodie, and a master of BBQ arts. You can
              find some of his thoughts and presentations on the conversation
              surrounding design over at discussingdesign.com.
            </p>
          </div>
          <br />
          <div id="adam">
            <h5>Adam Connor</h5>
            <p>
              Lights! Camera! Interaction! Design Inspiration from Filmmakers
            </p>
            <br />
            <aside>
              <img src={img2} alt="#" class="speaker" />
              <p class="info">
                @aaroni <br /> thisisaaronslife.com
              </p>
            </aside>
            <p>
              Films succeed in evoking responses and engaging audiences only
              with a combination of well-written narrative and effective
              storytelling technique. It’s the filmmaker’s job to put this
              together. To do so they’ve developed processes, tools and
              techniques that allow them to focus attention, emphasize
              information, foreshadow and produce the many elements that
              together comprise a well-told story.
            </p>
            <br />
            <p>
              With this workshop, we’ll revisit the topic of using stories in
              design and expand on the technical aspects used in film to
              communicate. We’ll look at some tools used in film, such as
              cinematic patterns, beat sheets, and storyboards. We’ll consider
              why they’re used and how we might look to them for inspiration.
            </p>
            <h6>About Adam</h6>
            <p>
              Adam Connor is a designer, illustrator and speaker passionate
              about collaboration, communication, creativity and storytelling.
              As an Experience Design Director with Mad*Pow, Adam combines 10+
              years of experience in interaction and experience design with a
              background in computer science, film, and animation to create
              effective and easy-to-use digital products and services. He
              believes that no matter how utilitarian a tool is, at the core of
              its creation lies a story; uncovering that story is key to its
              success. Occasionally, he shares his perspectives on design at
              adamconnor.com and discussingdesign.com.
            </p>
          </div>
          <br />
          <div id="aj">
            <h5>AJ Self</h5>
            <aside>
              <img src={img3} alt="#" class="speaker" />
              <p class="info">
                @ajself <br />
                ajself.com
              </p>
            </aside>
            <p>
              (You Should Be) Testing Your JavaScript <br /> <br />
              JavaScript applications frequently utilize battle-tested libraries
              like jQuery, AngularJS, Backbone.js and more, but how can we be
              sure that our code is ready for production? This talk will share
              tips on how writing tests can be written easily and quickly and
              how to remove buggy code through testing.
              <br />
              <br />
              About AJ
              <br />
              <br />
              AJ is a software engineer specializing in JavaScript working at
              Belly in Chicago. Lately he has been writing applications with
              AngularJS and loving it. When not coding he is out loving the
              outdoors with his dog, Sunshine.
            </p>
          </div>
          <br />
          <div id="arman">
            <h5>Arman Ghosh</h5>
            <br />
            <aside>
              <img src={img4} alt="#" class="speaker" />
              <p class="info">@armangosh</p>
            </aside>
            <p>
              Designing Deals: How Good Design Drives Sales <br /> <br />{" "}
              Perception influences decisions, especially when it comes to
              selling products and services. Learn why before you even start
              sales conversations; good, thoughtful design and presentation will
              define you and your ability to close deals. <br /> <br /> About
              Arman <br /> <br /> Arman is an entrepreneur who has his roots
              planted in building aggressive sales and revenue-generating teams.
              Having built out national sales and operations teams in the B2B
              and consumer spaces, his focus has been driving aggressive growth
              for technology-based companies. He has an extensive operating
              background and has built a career disrupting sales processes and
              approaches with companies doing the same in their respective
              technology spaces.
            </p>
          </div>
          <br />
          <div>
            <h5>Bermon Painter</h5>
            <p>Death to Wireframes: Long Live Rapid Prototyping</p>
            <br />
            <aside>
              <img src={img5} alt="#" class="speaker" />
              <p class="info">
                @bermonpainter <br />
                bermonpainter.com
              </p>
            </aside>
            <p>
              Static wireframes are a drag on the whole design process.
              Prototyping makes things a little better by allowing you to stitch
              together static wireframes or mockups while adding basic
              interactions. Rapid prototyping with HTML, CSS, and JavaScript is
              even better and faster; it increases collaboration and improves
              the iteration process. Kill your wireframes. Long live rapid
              prototyping. <br /> <br /> About Bermon <br /> <br /> Bermon is
              the organizer of various community groups for user experience
              designers and front-end developers, and the organizer of Blend
              Conference, a three-day, multi-track event for user experience
              strategists, designers and developers. He also leads the user
              experience team for Cardinal Solutions’ Charlotte office, where he
              consults with large enterprise clients on interesting problems
              across user experience, design and front-end development.
            </p>
          </div>
          <br />
          <div id="shay">
            <h5>Shay Howe</h5>
            <p>Less Is More: How Constraints Cultivate Growth</p>
            <br />
            <aside>
              {" "}
              <img src={img6} alt="#" class="speaker" />
              <p class="info">
                @shayhowe <br />
                learn.shayhowe.com
              </p>
            </aside>

            <p>
              By setting constraints, we force ourselves to be more productive.
              They help us make decisions, creating focus around the problem we
              are trying to solve. They improve our consistency, which provides
              a better experience for our users. And they help us grow, a
              valuable asset in times of innovation. <br /> <br /> About Shay{" "}
              <br /> <br /> As a designer and front-end developer, Shay Howe has
              a passion for solving problems while building creative and
              intuitive products. Shay specializes in product design and
              interface development, specialties which he regularly writes and
              speaks about.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Speakers;
