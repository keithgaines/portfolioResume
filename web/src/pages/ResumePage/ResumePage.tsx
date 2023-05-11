import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ResumeHeader from 'src/components/ResumeHeader/ResumeHeader'
import ResumeExperience from 'src/components/ResumeExperience/ResumeExperience'

const ResumePage = () => {
  return (
    <>
      <MetaTags title="Resume" description="Resume page" />
      <ResumeHeader
        name={'Keith Gaines'}
        title={'Systems Engineer'}
      />
      <ResumeExperience />
    </>
  )
}

export default ResumePage
