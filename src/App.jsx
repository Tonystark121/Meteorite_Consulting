import React from "react";
import Navbar from "./pages/navbar";
import Hero from "./pages/hero";
import Guide from "./pages/guide";
import Consulation from "./pages/consultation";
import Tours from "./pages/tours";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Guide />
      <Consulation />
      <Tours />
    </div>
  );
};

export default App;
