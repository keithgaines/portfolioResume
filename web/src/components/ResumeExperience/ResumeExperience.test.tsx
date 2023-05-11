import { render } from '@redwoodjs/testing/web'

import ResumeExperience from './ResumeExperience'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResumeExperience', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResumeExperience />)
    }).not.toThrow()
  })
})
