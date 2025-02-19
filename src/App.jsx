import { useState } from 'react'
import './App.css'
import React from "react";
import Herosection from "./components/Herosection.jsx"
import Registration from "./components/Registration.jsx"
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Herosection />
      <Registration />
    

    </>
  )
}

export default App
