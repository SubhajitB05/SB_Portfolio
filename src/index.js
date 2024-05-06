import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from './reportWebVitals';
import ErrorPage from "./Error";
import Home from "./Home/Home";
import About from "./About/About";
import Education from "./Education/Education";
import CodingProfiles from "./Coding Profiles/CodingProfiles";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Layout from "./Layout/Layout";
// import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
  {
    path: "/" || "/home",
    element: (
      <>
        <Layout />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/about",
    element: (
      <>
        <Layout />
        <About />
      </>
    ),
  },
  {
    path: "/education",
    element: (
      <>
        <Layout />
        <Education />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <Layout />
        <Projects />
      </>
    ),
  },
  {
    path: "/coding-profiles",
    element: (
      <>
        <Layout />
        <CodingProfiles />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Layout />
        <Contact />
      </>
    ),
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
