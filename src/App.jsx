import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
