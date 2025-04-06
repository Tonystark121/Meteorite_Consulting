import React from "react";
import Navbar from "./pages/navbar";
import Hero from "./pages/hero";
import Guide from "./pages/guide";
import Consulation from "./pages/consultation";
import Tours from "./pages/tours";
import Apparel from "./pages/apparel";
import Footer from "./pages/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Guide />
      <Consulation />
      <Tours />
      <Apparel />
      <Footer />
    </div>
  );
};

export default App;
