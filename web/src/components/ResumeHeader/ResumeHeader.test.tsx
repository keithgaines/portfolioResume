import { render } from '@redwoodjs/testing/web'

import ResumeHeader from './ResumeHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResumeHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResumeHeader />)
    }).not.toThrow()
  })
})
