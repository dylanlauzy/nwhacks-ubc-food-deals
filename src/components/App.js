import React from 'react';
import OptionList from './OptionList';
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from './About';
import Features from './Features';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features/>
      <OptionList/>
    </div>
  );
}

export default App;
