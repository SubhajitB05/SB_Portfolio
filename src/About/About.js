import "./About.css";
import myImg_ from "../Assets/myImg_.JPG";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <div className="about-body">
      <div className="container about-main-container">
        
        <m.img 
          // className="about-pic"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          src={myImg_} 
          className="myImg_" />
       
        <div className="about-desc">
          <m.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            I am a 4th year Computer Science and Engineering Student{" "}
          </m.h1>
          <m.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            at Jalpaiguri Government Engineering College
          </m.h1>
          <m.h1
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 1.8 }}
          >A developer who loves to build cool things.</m.h1>
          <m.p
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 2.2 }}
          >
            I am interested in MERN stack development and I have proficiency over languages like C/C++, Javacsript, HTML/CSS and frameworks/Libraries - Bootsrtap, React, Redux, Node.js
          </m.p>
        </div>
      </div>
    </div>
  );
};

export default About;
