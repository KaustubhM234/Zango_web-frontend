import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import AppBanner from "./Components/AppBanner";
import FAQ from "./Components/Faq";

function App() {

 

  return (
    <div className="mainPage">
      <div className="App">
        <Home />
          <About />
        
        <Work />
        {/* <Testimonial /> */}
        <AppBanner/>
        <Contact />
        <FAQ/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
