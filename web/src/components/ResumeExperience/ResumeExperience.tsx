import React from 'react';
import '../../resume.css'; // Replace with the correct CSS file if applicable

const ResumeExperience = ({ experience }) => {
  return (
    <div className="resume-experience">
      <h2 className="section-heading">Experience</h2>
      {experience.map((job, index) => (
        <div className="job" key={index}>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
          <p className="job-date">{job.date}</p> 
          <ul className="job-highlights">
            {job.highlights.map((highlight, index) => (
              <li className="job-highlight" key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResumeExperience;
