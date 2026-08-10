import { useState } from 'react'
import { data } from './data'
import ProjectCard from './ProjectCard';
import "./Projects.css"
import { projectBtn } from './data';

const Projects = () => {
  const [projects, setProjects] = useState(data);
  const [activeBtn, setActiveBtn] = useState("all");

  let findProject = (type) => {
    setActiveBtn(type);
    if (type === "all") {
      setProjects(data);
    } else {
      const foundItems = data.filter(pro => pro.type === type);
      setProjects(foundItems);
    }
  }
  
  return (
    <div className='projects section' id='projects' data-aos="fade-up">
      <div className="section-heading">
        <h2 data-aos="fade-right">Projects</h2>
        <p data-aos="fade-left"> See my projects!</p>
          
      </div>

      <div className="btn-box" >
        {projectBtn.map((btn, index) =>
          <button
            key={index}
            data-aos="zoom-out"
            className={activeBtn === btn.btn ? "activeBtn" : "projectBtn"}
            onClick={() => findProject(btn.btn)}
          >
            {btn.btn}
          </button>
        )}
      </div>

      {/* Rendering projects */}
      <ProjectCard projects={projects} />
    </div>
  )
}

export default Projects
