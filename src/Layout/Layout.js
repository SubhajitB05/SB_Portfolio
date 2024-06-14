import "./Layout.css";
import { Outlet, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaHome, FaCode } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdContacts } from "react-icons/md";

import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdSchool } from "react-icons/md";

import { useState, useEffect } from "react";

const Header = () => {
  const [showMenu, setShoeMenu] = useState();
  useEffect(() => {
    setShoeMenu(false);
  }, []);
  return (
    <div className="container nav-container">
      <div className="nav-bar">
        <h1>
          <span className="sb">SB</span>Portfolio
        </h1>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          {/* <li>
            <NavLink to="/coding-profiles">Coding Profiles</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {/* <button className="primary-btn">Sign in</button> */}
        </ul>
        {!showMenu ? (
          <GiHamburgerMenu
            style={{ color: "white" }}
            className="hamburger-icon"
            size={26}
            onClick={() => {
              setShoeMenu(!showMenu);
            }}
          />
        ) : (
          <ImCross
            className="cross-icon"
            size={22}
            onClick={() => {
              setShoeMenu(!showMenu);
            }}
          />
        )}
      </div>

      <div className="toggle-div">
        <ul
          className={showMenu ? "toggle-menu-links show" : "toggle-menu-links"}
        >
          <li>
            <NavLink to="/" title="Home">
              <FaHome size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" title="About">
              <IoMdInformationCircleOutline size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" title="Education">
              <MdSchool size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" title="Projects">
              <GoProject size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/coding-profiles" title="Coding Profiles">
              <FaCode size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" title="Contact">
              <MdContacts size={30} />
            </NavLink>
          </li>
          {/* <button className="primary-btn">Sign in</button> */}
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="foot">All right reserved @SubhajitBarman 2024</div>;
};
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      {/* <Footer/>        */}
    </div>
  );
};

export default Layout;
