import { useState } from "react";
import "./App.css";
import React from "react";

import Registration from "./components/Registration.jsx";
import NewspaperHeader from "./components/NewspaperHeader";
import About from "./components/About.jsx";
import Spnosor from "./components/Spnosor.jsx";
import Prizes from "./components/Prizes.jsx";

function App() {
  return (
    <>
      <NewspaperHeader />
      <Spnosor />
      <Registration />
      <About />
      <Prizes/>
   
    </>
  );
}

export default App;
