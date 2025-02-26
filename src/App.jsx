
import "./App.css";
import React from "react";

import Registration from "./components/Registration.jsx";
import NewspaperHeader from "./components/NewspaperHeader";
import About from "./components/About.jsx";
import Spnosor from "./components/Spnosor.jsx";
import Theme from "./components/Theme.jsx";
import Prizes from "./components/Prizes.jsx";
import CursorEffect from "./components/magicui/cursorEffect.jsx"
// import Theme from "./components/Theme.jsx"
import Header from "./components/Header.jsx"
import Schedule from "./components/Schedule.jsx"
import Chatbot from "./components/Chatbot.jsx"
import Footer from "./components/Footer.jsx"
import Owl from "./components/Owl.jsx"
import BackgroundMusic from "./components/BackgroundMusic.jsx"

function App() {
  return (
    <>

      <NewspaperHeader />
      <Owl />
      {/* <Spnosor /> */}
      {/* <Registration /> */}
      <Header />
      <About />
      <Prizes/>
      <Theme />
      <Schedule />
      {/* <CursorEffect /> */}
      <Chatbot />
      <Footer />
      <BackgroundMusic />
   
    </>
  );
}

export default App;
