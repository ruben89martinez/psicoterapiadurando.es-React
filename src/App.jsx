import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";

const App = () => (
  <>
    <Header />

    <main>
      <Hero />
      <Features />

      <About />

      <Services />
      
      <Contact />
    </main>

    <Footer />
  </>
);

export default App;
