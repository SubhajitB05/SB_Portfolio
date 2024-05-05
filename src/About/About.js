import "./About.css";
import myImg_ from "../Assets/myImg_.JPG";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div
      className="about-body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container about-main-container">
        <div className="about-pic">
          <img src={myImg_} className="myImg_" />
        </div>
        <div className="about-desc">
          <h1>I am a 3rd year Computer Science and Engineering Student </h1>
          <h1>at Jalpaiguri Government Engineering College</h1>
          <h1>A developer who loves to build cool things.</h1>
          <p>
            scelerisque fermentum dui faucibus in ornare quam viverra orci
            sagittis eu volutpat odio facilisis mauris sit amet massa vitae
            tortor condimentum lacinia quis vel eros donec ac odio tempor orci
            dapibus ultrices in iaculis nunc sed augue lacus viverra vitae
            congue eu consequat ac felis donec et odio pellentesque diam
            volutpat commodo.
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default About;
