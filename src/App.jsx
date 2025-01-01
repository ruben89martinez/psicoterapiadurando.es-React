import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            
            <Services />
            <Contact />
          </>
        } />
        <Route path="/sobre-mi" element={<About />} /> {/* Nueva página */}
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
