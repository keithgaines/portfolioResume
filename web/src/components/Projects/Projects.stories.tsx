// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Projects> = (args) => {
//   return <Projects {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Projects from './Projects'

export const generated = () => {
  return <Projects />
}

export default {
  title: 'Components/Projects',
  component: Projects,
} as ComponentMeta<typeof Projects>
