// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ResumeExperience> = (args) => {
//   return <ResumeExperience {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ResumeExperience from './ResumeExperience'

export const generated = () => {
  return <ResumeExperience />
}

export default {
  title: 'Components/ResumeExperience',
  component: ResumeExperience,
} as ComponentMeta<typeof ResumeExperience>
