import "./App.css";
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Chatbot from "./components/Chatbot.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundMusic from "./components/BackgroundMusic.jsx";
import AboutSectionMain from "./components/AboutSectionMain.jsx";
import Mentor from "./components/Mentor.jsx";
import Team from "./components/Team.jsx";
import NewspaperHeader from "./components/NewspaperHeader.jsx";
import Spnosor from "./components/Spnosor.jsx";
import Events from "./components/Events.jsx";
import CodeOfConduct from "./components/CodeOfConduct.jsx";
import Swags from "./components/Swags.jsx";
import Faq from "./components/Faq12.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx"; // Import LoadingScreen

// Component to handle loading state on route change
const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show loading screen
    const timer = setTimeout(() => setLoading(false), 1000); // Hide after 1 sec
    return () => clearTimeout(timer);
  }, [location.pathname]); // Run on route change

  return loading ? <LoadingScreen /> : children;
};

function App() {
  return (
    <Router>
      <>
        <NewspaperHeader />
<<<<<<< HEAD
        <LoadingWrapper>
          <Routes>
            <Route path="/" element={<AboutSectionMain />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/codeofconduct" element={<CodeOfConduct />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsor" element={<Spnosor />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </LoadingWrapper>
=======
        <Routes>
          <Route path="/" element={<AboutSectionMain />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/codeofconduct" element={<CodeOfConduct />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Swags" element={<Swags />} />
          <Route path="/sponsor" element={<Spnosor />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
>>>>>>> 2efc8b5a21f7dd26d9e15482d8834c3c9f32a90c
        <Chatbot />
        <BackgroundMusic />
        <Footer />
      </>
    </Router>
  );
}

export default App;
