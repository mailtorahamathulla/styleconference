import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
const Register = () => {
  return (
    <div>
      <Nav />
      <section id="speakers">
        <h2 id="head2">Register</h2>
        <p id="tag2">
          Every year we aim to have an unbelievable time, and this year we'd
          love it for you to join us. <br /> Conference passes only cost $99,
          one of the best values you'll find.
        </p>
      </section>
      <section id="last">
        <div id="purchase">
          <h4>Purchase a Conference Pass</h4>
          <p>$99 per Pass</p>
          <br />
          <p>
            Purchase your Styles Conference pass using the form to the right.
            Multiple passes <br /> may be purchased within the same order, so
            feel free to bring a friend or two along. <br /> Once your order is
            finished we’ll follow up and provide a receipt for your purchase.{" "}
            <br /> See you soon!
          </p>
          <br />
          <b>Why Attend?</b>
          <br />
          <ul type="square">
            <li>Over twenty world-class speakers</li>
            <li>
              One full day of workshops and two full days of presentations
            </li>
            <li>Hosted at The Chicago Theatre, a historical landmark</li>
            <li>August in Chicago is simply amazing</li>
          </ul>
        </div>
        <div id="form">
          <form action="#">
            Name <br />
            <input type="text" name="name" id="" placeholder="Full Name" />
            <br />
            <br />
            Email <br />
            <input type="text" placeholder="Email address" />
            <br /> <br />
            Number of Passes
            <br />
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br /> <br />
            Comments <br />
            <textarea name="comments" id=""></textarea>
            <br /> <br />
            <button id="btn">PURCHASE</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
