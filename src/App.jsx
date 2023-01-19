import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Website/Navbar";
import { Service } from "./Website/Service";
import { About } from "./Website/About";
import { Contact } from "./Website/Contact";
import { Home } from "./Website/Home";
import { Footer } from "./Website/Footer";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export { App };