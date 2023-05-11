import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ResumePage = () => {
  return (
    <>
      <MetaTags title="Resume" description="Resume page" />

      <h1>ResumePage</h1>
      <p>
        Find me in <code>./web/src/pages/ResumePage/ResumePage.tsx</code>
      </p>
      <p>
        My default route is named <code>resume</code>, link to me with `
        <Link to={routes.resume()}>Resume</Link>`
      </p>
    </>
  )
}

export default ResumePage
