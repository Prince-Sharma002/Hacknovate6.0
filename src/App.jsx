import { useState } from "react";
import "./App.css";
import React from "react";

import Registration from "./components/Registration.jsx";
import NewspaperHeader from "./components/NewspaperHeader";
import About from "./components/About.jsx";

function App() {
  return (
    <>
      <NewspaperHeader />

      <Registration />

      <About />
    </>
  );
}

export default App;
