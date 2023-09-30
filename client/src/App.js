import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import EvInstall from "./pages/EvInstall";
import Olev from './pages/Olev'
import Landlords from "./pages/Landlords";


function App() {
  return (
    <Router >
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/evcharging" element={<EvInstall />} />
        <Route path="/olev" element={<Olev />} />
        <Route path="/landlords" element={<Landlords />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
