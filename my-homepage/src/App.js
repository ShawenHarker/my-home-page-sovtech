import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import SovTechGrad from "./SovTechGrad";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Skills />
      <SovTechGrad />
    </div>
  );
}

export default App;
