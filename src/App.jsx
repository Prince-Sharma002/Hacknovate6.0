import { useState } from "react";
import "./App.css";
import React from "react";

import Registration from "./components/Registration.jsx";
import NewspaperHeader from "./components/NewspaperHeader";
import About from "./components/About.jsx";
import Spnosor from "./components/Spnosor.jsx";
import Theme from "./components/Theme.jsx";
import Prizes from "./components/Prizes.jsx";
import CursorEffect from "./components/magicui/cursorEffect.jsx"
import Chatbot from "./components/Chatbot.jsx"
import Schedule from "./components/Schedule.jsx"

function App() {
  return (
    <>
      <NewspaperHeader />
      <Spnosor />
      <Registration />
      <About />
      <Prizes/>
      <Theme />
      {/* <CursorEffect /> */}
      <Chatbot />
      <Schedule />
    </>
  );
}

export default App;
