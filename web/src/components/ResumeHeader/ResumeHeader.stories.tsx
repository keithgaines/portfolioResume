// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ResumeHeader> = (args) => {
//   return <ResumeHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ResumeHeader from './ResumeHeader'

export const generated = () => {
  return <ResumeHeader />
}

export default {
  title: 'Components/ResumeHeader',
  component: ResumeHeader,
} as ComponentMeta<typeof ResumeHeader>
