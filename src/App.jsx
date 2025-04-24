import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Covid from "./components/covid/covid";
import Resourse from "./components/resourse/Resourse";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Covid />
      <Resourse />
    </div>
  );
}

export default App;
