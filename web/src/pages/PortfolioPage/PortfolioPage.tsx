import React from 'react';
import Projects from 'src/components/Projects/Projects';

const projects = [
  {
    title: "To Do List",
    imageSrc: "images/todolist.png",
    githubLink: "https://github.com/keithgaines/todolist_react",
    liveSiteLink: "https://todolisttsx.vercel.app"
  },
  {
    title: "Sunnyside Landing Page",
    imageSrc: "images/sunnyside.png",
    githubLink: "https://github.com/keithgaines/sunnyside",
    liveSiteLink: "https://keithgaines.github.io/sunnyside/"
  },
  {
    title: "Loopstudios Landing Page",
    imageSrc: "images/loopstudios.png",
    githubLink: "https://github.com/keithgaines/loopstudios",
    liveSiteLink: "https://keithgaines.github.io/loopstudios/"
  },
  {
    title: "Modern Art Gallery",
    imageSrc: "images/artgallery.png",
    githubLink: "https://github.com/keithgaines/art-gallery-website",
    liveSiteLink: "https://keithgaines.github.io/art-gallery-website"
  },
  {
    title: "Galleria Slideshow",
    imageSrc: "images/galleria.png",
    githubLink: "https://github.com/keithgaines/slideshowreact",
    liveSiteLink: "https://slideshowreact.vercel.app/"
  },
  {
    title: "FAQ Page",
    imageSrc: "images/faq.png",
    githubLink: "https://github.com/keithgaines/accordionfaq",
    liveSiteLink: "https://accordionfaq.vercel.app/"
  },
  {
    title: "Room Homepage",
    imageSrc: "images/room.png",
    githubLink: "https://github.com/keithgaines/roomhomepage",
    liveSiteLink: "https://keithgaines.github.io/roomhomepage/"
  },
  {
    title: "Photosnap Stories",
    imageSrc: "images/photosnap.png",
    githubLink: "https://github.com/keithgaines/photosnap",
    liveSiteLink: "https://photosnap-delta.vercel.app/"
  }
];

const Portfolio = () => {
  return (
    <div className="content">
      <div className="projectstitle">
        <h1 style={{ textAlign: 'center' }}>Projects</h1>
      </div>
      <div className="projectscontainer">
        {projects.map((project) => (
          <Projects key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
