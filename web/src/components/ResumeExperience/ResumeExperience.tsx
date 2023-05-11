import React from 'react';

const experience = [
  {
    title: 'IT Systems Administrator',
    company: 'Celero Commerce',
    date: 'August 2022 - Present',
    highlights: [
      'Contributed to infrastructure team wiki documentation. Documentation was written in markdown and version control was managed by git.',
      'Automated Office 365 management by writing scripts in Powershell and Microsoft Graph.',
      'Maintained the codebase of the scripts and participated in code reviews/pull requests to merge changes into the main branch.',
    ],
  },
  {
    title: 'Help Desk Technician',
    company: 'National Seating and Mobility',
    date: 'June 2022 - Aug 2022',
    highlights: [
      'Respond to and resolve incoming technical support requests from internal or external customers in a timely and professional manner.',
      'Troubleshoot hardware and software issues on desktops, laptops, mobile devices, and other endpoints.',
      'Document and track support requests and resolutions using a ticketing system to ensure accuracy and completeness of information.',
    ],
  },

  {
    title: 'Tier 2 Support Agent',
    company: 'Louisiana Pacific',
    date: 'January 2022 - June 2022',
    highlights: [
      "Improved Tier 1 support team's performance by streamlining standard operating procedures (SOPs), resulting in higher First Call Resolution metric and better adherence to Service Level Agreements (SLAs).",
      'Acted as the escalation point for the Tier 1 team, providing guidance and support on complex technical issues.',
      "Created and updated documentation in the company's wiki, ensuring accuracy and completeness of information for use by other team members and stakeholders.",
    ],
  },

  {
    title: 'Cloud System Administrator',
    company: 'AHEAD',
    date: 'April 2021 - Jan 2022',
    highlights: [
      "Ensure compliance with security policies and standards by managing identity and access within Azure AD, and documenting access control procedures and changes as necessary.",
      "Implement and adhere to IT Service Management (ITSM) principles to manage Windows and Linux (Ubuntu) VMs and workflows, including incident, change, and problem management, to minimize downtime and enhance service quality.",
      "Keep Linux/Windows servers in the cloud (Azure) up-to-date and secure by regularly patching and updating them, and testing patches and updates in a staging environment before applying them in production.",
    ],
  },
];

const ResumeExperience = () => {
  return (
    <div>
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.date}</p>
          <ul>
            {job.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResumeExperience;
