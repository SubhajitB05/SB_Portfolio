// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Layout/Layout";
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
            <Layout />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <AnimatePresence>
              <Layout />
              <About />
            </AnimatePresence>
          </>
        }
      />
      <Route
        path="/education"
        element={
          <>
            <Layout />
            <Education />
          </>
        }
      />
      <Route
        path="/projects"
        element={
          <>
            <Layout />
            <Projects />
          </>
        }
      />
      <Route
        path="/coding-profiles"
        element={
          <>
            <Layout />
            <CodingProfiles />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Layout />
            <Contact />
          </>
        }
      />
    </Routes>
  );
};

export default App;
