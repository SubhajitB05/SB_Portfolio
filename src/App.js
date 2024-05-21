// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import CodingProfiles from "./Coding Profiles/CodingProfiles";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <About />
          </>
        }
      />
      <Route
        path="/education"
        element={
          <>
            <Education />
          </>
        }
      />
      <Route
        path="/projects"
        element={
          <>
            <Projects />
          </>
        }
      />
      <Route
        path="/coding-profiles"
        element={
          <>
            <CodingProfiles />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Contact />
          </>
        }
      />
    </Routes>
  );
};

export default App;
