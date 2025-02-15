import { useState } from 'react'
import './App.css'
import { Button } from "./components/ui/button.jsx";

import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
import React from "react";
 
import { buttonVariants } from "./components/ui/button";
import { cn } from "./lib/utils.js";
import { Dock, DockIcon } from "./components/magicui/dock.jsx";
 
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar /> */}
    <HeroSection />
    
        <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <HomeIcon />
        </DockIcon>
        <DockIcon>
          <CalendarIcon />
        </DockIcon>
        <DockIcon>
          <MailIcon />
        </DockIcon>
        <DockIcon>
          <PencilIcon />
        </DockIcon>
      </Dock>
    </div>
    </>
  )
}

export default App
