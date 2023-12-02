import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';

function App() {
  const [mode, setMode] = useState("light");
  return (
    <>
     <Navbar  />
     <div className="container my-3 ">
      <Form/>
     </div>
    </>
  );
}

export default App;
