import React from "react";
import Home from "./Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Footer from "./Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>

    </>
  );
};

export default App;
