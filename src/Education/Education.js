
import './Education.css'
import { RiGraduationCapFill } from "react-icons/ri";
import { motion as m } from "framer-motion";

const Education = () => {
  return (
    <div className='container edu-main-section'>
      <m.div className="college-section"
         initial={{opacity:0, x:-100}}
         animate={{opacity:1, x:0}}
         transition={{duration:0.5, delay:0.9}}
      >
        <m.div className="college">
          <div className="clg-heading">
            <h2>B.Tech, CSE</h2>
            <h4>2021-Present</h4>
          </div>
          <div className="clg-desc">
          <p>Currently pursuing my B.Tech in CSE from Jalpaiguri Government Engineering College, 9.12 YGPA till now.</p>
          <p>Highly active in the domain of Web Development with Frontend part and MERN stack.</p>
          </div>
        </m.div>
      </m.div>

      <m.div className="hs-section"
         initial={{opacity:0, x:100}}
         animate={{opacity:1, x:0}}
         transition={{duration:0.5, delay:1.3}}
      >
        <div className="hs">
          <div className="hs-heading">
            <h2>12th WBCHSE Board, PCMB</h2>
            <h4>2018-2020</h4>
          </div>
          <div className="hs-desc">
            <p>Completed 12th board exam from Ghogomali High School (H.S.) with 96% marks in aggregate.</p>
          </div>
        </div>
      </m.div>

      <m.div className="ss-section"
         initial={{opacity:0, x:-100}}
         animate={{opacity:1, x:0}}
         transition={{duration:0.5, delay:1.7}}
      >
      <div className="ss">
          <div className="ss-heading">
            <h2>10th WBBSE Board, PCMB</h2>
            <h4>2018</h4>
          </div>
          <div className="ss-desc">
            <p>Completed 10th board exam from Ghogomali High School (H.S.) with 93.14% marks in aggregate.</p>
          </div>
        </div>
      </m.div>

      <m.div className="timelines"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
      >
      <RiGraduationCapFill className='grad-icon1' size={30} />
      <RiGraduationCapFill className='grad-icon2' size={30} />
      <RiGraduationCapFill className='grad-icon3' size={30} />
        <div className="bar"></div>
      </m.div>
    </div>
  )
}

export default Education
