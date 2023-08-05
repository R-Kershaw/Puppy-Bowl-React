import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
// import Red from './components/Red.jsx';
// import Blue from './components/Blue.jsx';
import Home from './components/Home.jsx';

function App() {
  const [state, setState] = useState();
  
  return (

<div id="container">
      <h1></h1>
      <div id="navbar">
        {/* <Link to="/Blue">Blue</Link>
        <Link to="/Red">Red</Link> */}
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          {/* <Route path="/Blue" element={<Blue/>} />
          <Route path="/Red" element={<Red/>} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;