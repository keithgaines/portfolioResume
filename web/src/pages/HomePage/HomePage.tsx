import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Intro from 'src/components/Intro/Intro'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className='content'>
      <Intro />
      </div>
    </>
  )
}

export default HomePage
