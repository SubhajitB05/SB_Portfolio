import './Projects.css'
// import proj1 from '../Assets/proj1.png'
import ProjectData from './ProjectData'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='project-main-section container'>
      {
        ProjectData.map((elem)=>{
          return (
            <div className='card' key={elem.id}>
            <div className='proj-img'>
              <img src={elem.img}/>
            </div>
            <div className='proj-heading'><h2>{elem.heading}</h2></div>
            <div className='proj-links'>
              <Link to={elem.gitRepo}>Github</Link>
              <Link to={elem.live}>Live</Link>
            </div>
          </div>);
        })
      }
      
      
    </div>
  )
}

export default Projects
