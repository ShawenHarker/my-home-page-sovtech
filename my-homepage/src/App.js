import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import SovTechGrad from "./SovTechGrad";
import Links from "./Links";
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Skills />
      <SovTechGrad />
      <Links />
    </div>
  );
}

export default App;
