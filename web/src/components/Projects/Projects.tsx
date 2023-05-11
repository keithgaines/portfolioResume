import React from 'react';

const Projects = ({ project }) => {
  const { title, imageSrc, githubLink, liveSiteLink } = project;

  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageSrc} alt="site screenshot" />
      <div className="links">
        <a href={githubLink}>View Code</a>
        <a href={liveSiteLink}>View Live Site</a>
      </div>
    </div>
  );
};

export default Projects;
