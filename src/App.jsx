import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot.jsx";
import Footer from "./components/Footer.jsx";
import Owl from "./components/Owl.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import AboutSectionMain from "./components/AboutSectionMain.jsx";
import Mentor from "./components/Mentor.jsx";
import Team from "./components/Team.jsx";
import NewspaperHeader from "./components/NewspaperHeader.jsx";
import Spnosor from "./components/Spnosor.jsx";
import Events from "./components/Events.jsx";

function App() {
  return (
    <Router>
      <>
        <Owl />
        <NewspaperHeader />
        <Routes>
          <Route path="/" element={<AboutSectionMain />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsor" element={<Spnosor />} />
        </Routes>
        <Chatbot />
        <BackgroundMusic />
        <Footer />
      </>
    </Router>
  );
}

export default App;
