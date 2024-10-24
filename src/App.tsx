import React, { useState } from "react";

import Style from "./App.module.css";
import { Navbar } from "@features/Navbar/Navbar";
import { Hero } from "@features/Hero/Hero";
import { About } from "@features/About/About";
import { Experience } from "@features/Experience/Experience";
import { Projects } from "@features/Projects/Projects";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className={Style.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
