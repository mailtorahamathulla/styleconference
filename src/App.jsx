import React from "react";
import Home from "./Home";
import Schedule from "./Schedule";
import Speakers from "./Speakers";
import Venue from "./Venue";
import Register from "./Register";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Speaker" element={<Speakers />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Venue" element={<Venue />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
