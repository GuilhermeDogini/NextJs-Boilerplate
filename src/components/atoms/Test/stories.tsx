import { type StoryFn, type Meta } from '@storybook/react'

import { Test } from '.'

export default {
  title: 'Atoms/Test',
  component: Test,
} as Meta

export const Default: StoryFn = () => <Test />
