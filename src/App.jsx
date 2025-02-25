
import "./App.css";
import React from "react";

import Registration from "./components/Registration.jsx";
import NewspaperHeader from "./components/NewspaperHeader";
import About from "./components/About.jsx";
import Spnosor from "./components/Spnosor.jsx";
import Theme from "./components/Theme.jsx";
import Prizes from "./components/Prizes.jsx";
<<<<<<< HEAD
import CursorEffect from "./components/magicui/cursorEffect.jsx"
// import Theme from "./components/Theme.jsx"
import Header from "./components/Header.jsx"
=======
// import CursorEffect from "./components/magicui/cursorEffect.jsx"
import Footer from "./components/Footer.jsx";
import CursorEffect from "./components/magicui/cursorEffect.jsx"
import Chatbot from "./components/Chatbot.jsx"
import Schedule from "./components/Schedule.jsx"
>>>>>>> 1688ed9af122db441c8d8932dd5c66de380fedb2

function App() {
  return (
    <>
      <NewspaperHeader />
      {/* <Spnosor /> */}
      {/* <Registration /> */}
      <Header />
      <About />
      <Prizes/>
<<<<<<< HEAD
      <Theme/>
      <CursorEffect />
=======
      <Theme />
      <Schedule />
      {/* <CursorEffect /> */}
        

      <Footer />
>>>>>>> 1688ed9af122db441c8d8932dd5c66de380fedb2
   
    </>
  );
}

export default App;
