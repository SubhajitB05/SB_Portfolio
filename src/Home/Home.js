import subhajit from "../Assets/Subhajit_Barman.jpg";
import myImg from "../Assets/myImg_.JPG";
import { Link } from "react-router-dom";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
      <div className="main-container container ">
        <div className="home-container ">
          <div className="left-desc">
            <h1>Hello, It's me</h1>
            <h1>
              <span className="name">Subhajit Barman </span>
            </h1>
            <TypeWrt />
            <p>
              I am a dedicated and passionate developer with a strong interest
              in creating efficient and user-friendly web applications using
              modern technologies like React.js
            </p>
            <div className="social-div">
              <Link
                to={"https://www.linkedin.com/in/subhajit-linkedb05/"}
                target="__"
              >
                <FaLinkedin className="social-icons" size={40} />
              </Link>
              <Link to={"https://github.com/SubhajitB05"} target="__">
                <FaGithub className="social-icons" size={40} />
              </Link>
              <Link to={"https://github.com/SubhajitB05"} target="__">
                <FaInstagram className="social-icons" size={40} />
              </Link>
            </div>
            <button className="primary-btn">Download Resume</button>
            <button className="secondary-btn">Message</button>
          </div>
          <div className="right-pic">
            <img src={myImg} className="myPic"></img>
          </div>
        </div>
      </div>
  );
};

const TypeWrt = () => {
  return (
    <>
      <h1 style={{ marginBottom: "2rem", fontWeight: "normal" }}>
        And I am a{""}
        <br/>
        <span style={{ color: "orangered", fontWeight: "bold" }} >
          <Typewriter
            words={["Learner", "Frontend Developer", "Programmer"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </>
  );
};

export default Home;
