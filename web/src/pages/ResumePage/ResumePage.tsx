import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ResumeHeader from 'src/components/ResumeHeader/ResumeHeader'
import ResumeExperience from 'src/components/ResumeExperience/ResumeExperience'

import '../../resume.css'

const experience = [
      {
        "title": "IT Support Administrator",
        "company": "Celero Commerce",
        "date": "Aug 2022 - Present",
        "highlights": [
          "Developed PowerShell scripts to streamline employee onboarding/offboarding processes in Azure, resulting in significant time savings and reduced errors.",
          "Automated auditing of Azure user permissions and properties using PowerShell, improving efficiency and accuracy.",
          "Created comprehensive documentation for PowerShell scripts in our team wiki repository, enabling widespread implementation and knowledge sharing."
        ]
      },
      {
        "title": "Help Desk Support Technician",
        "company": "National Seating & Mobility",
        "date": "Jun 2022 - Aug 2022",
        "highlights": [
          "Troubleshot hardware and software issues across various devices, including desktops, laptops, and mobile devices, utilizing PowerShell and Bash scripting.",
          "Responded to and resolved technical support requests promptly, ensuring minimal downtime for end-users.",
          "Documented and tracked support requests and resolutions using a ticketing system, maintaining accurate records for future reference."
        ]
      },
      {
        "title": "Tier 2 Support Agent",
        "company": "Louisiana-Pacific Corporation",
        "date": "Jan 2022 - Jun 2022",
        "highlights": [
          "Streamlined Tier 1 support team procedures by incorporating PowerShell scripting, automating repetitive tasks and enhancing efficiency.",
          "Served as an escalation point for the Tier 1 team, providing expert guidance and support on complex technical issues for timely problem resolution.",
          "Led a hardware lifecycle upgrade project, utilizing PowerShell and Bash scripts for seamless migrations and minimal disruption to business operations.",
          "Created and updated comprehensive documentation in the company's wiki, empowering team members with troubleshooting resources and system maintenance information.",
          "Managed and maintained PC and mobile endpoints in Azure, leveraging PowerShell for configuration management and security enhancements."
        ]
      },

      {
        "title": "Cloud Administrator",
        "company": "AHEAD",
        "date": "April 2021 - Jan 2022",
        "highlights": [
          "Implemented Git version control system to manage and track changes in infrastructure-as-code (IaC) templates and configuration files, enabling efficient collaboration and easy rollback of changes.",
          "Served as an escalation point for the Tier 1 team, providing expert guidance and support on complex technical issues for timely problem resolution.",
          "Led a hardware lifecycle upgrade project, utilizing PowerShell and Bash scripts for seamless migrations and minimal disruption to business operations.",
          "Created and updated comprehensive documentation in the company's wiki, empowering team members with troubleshooting resources and system maintenance information.",
          "Managed and maintained PC and mobile endpoints in Azure, leveraging PowerShell for configuration management and security enhancements."
        ]
      }
    ]
    

const ResumePage = () => {
  return (
    <>
      <MetaTags title="Resume" description="Resume page" />
      <div className='content'>
      <ResumeHeader
        name={'Keith Gaines'}
        title={'Full Stack Developer'}
      />
      <br />
      <br />
      <ResumeExperience experience={experience} />
      </div>
    </>
  )
}

export default ResumePage
