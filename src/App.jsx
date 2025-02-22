import { useState } from "react";
import "./App.css";
import React from "react";

import Registration from "./components/Registration.jsx";
import NewspaperHeader from "./components/NewspaperHeader";
import About from "./components/About.jsx";
import Spnosor from "./components/Spnosor.jsx";
<<<<<<< HEAD
import Theme from "./components/Theme.jsx";
=======
import Prizes from "./components/Prizes.jsx";
>>>>>>> 78d7fc056e98b84cd443464e041e666a3598d113

function App() {
  return (
    <>
      <NewspaperHeader />
      <Spnosor />
      <Registration />
      <About />
<<<<<<< HEAD
      <Theme />
=======
      <Prizes/>
   
>>>>>>> 78d7fc056e98b84cd443464e041e666a3598d113
    </>
  );
}

export default App;
