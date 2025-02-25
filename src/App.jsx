
import "./App.css";
import React from "react";

import Registration from "./components/Registration.jsx";
import NewspaperHeader from "./components/NewspaperHeader";
import About from "./components/About.jsx";
import Spnosor from "./components/Spnosor.jsx";
import Theme from "./components/Theme.jsx";
import Prizes from "./components/Prizes.jsx";
// import CursorEffect from "./components/magicui/cursorEffect.jsx"
import Footer from "./components/Footer.jsx";
import CursorEffect from "./components/magicui/cursorEffect.jsx"
import Chatbot from "./components/Chatbot.jsx"
import Schedule from "./components/Schedule.jsx"
import Header from "./components/Header.jsx"
import CommunityPartner from "./components/CommunityPartner.jsx"

function App() {
  return (
    <>
      <NewspaperHeader />
      {/* <Spnosor /> */}
      {/* <Registration /> */}
      <Header />
      <About />
      <Prizes/>
      <Theme/>
      <CursorEffect />
   
    </>
  );
}

export default App;
