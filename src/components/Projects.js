import React from 'react';
import './Projects.css';
import { useOnScreen } from './useOnScreen';

const ProjectCard = ({ title, description, imgSrc }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? 'visible' : ''}`}
    >
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Projects = () => {
  const projects = [
    { title: 'Weather-app', description: 'Weather app to see current weather in different regions', imgSrc: 'weather.png' },
    { title: 'Three.js portfolio', description: 'Made  3d environment portfolio using three.js', imgSrc: 'game.png' },
    { title: 'OneBox Re-design', description: 'Redesigned OneBox using React', imgSrc: 'onebox.png' },
    // Add more projects as needed
  ];

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
