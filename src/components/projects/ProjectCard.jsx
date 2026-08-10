import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectCard = ({ projects }) => {
  return (
    <div className='card-container'>
      {projects.map((project, index) => (
        <div
          key={index}
          className='cardBox'

          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className='card-content-wrapper'>
            <img src={project.img} alt="img" />
            <div className="cardContent">
              <h3>{project.name}</h3>
              <a href={project.link}>
                View Code
                <FaLongArrowAltRight className='arrowIcon' />
              </a>
              {project.site && (
                <a href={project.site}>
                  Live Demo
                  <FaLongArrowAltRight className='arrowIcon' />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
