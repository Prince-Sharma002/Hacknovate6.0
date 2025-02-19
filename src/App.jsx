import { useState } from 'react'
import './App.css'
import React from "react";

import Registration from "./components/Registration.jsx"
import NewspaperHeader from "./components/NewspaperHeader";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NewspaperHeader />

      <Registration />



    </>
  )
}

export default App
