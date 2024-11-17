import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1',
      tech: ['React', 'TypeScript', 'Node.js'],
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 