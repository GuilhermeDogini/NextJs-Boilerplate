import { type StoryFn, type Meta } from '@storybook/react'

import { Test } from '.'

export default {
  title: 'Organisms/Test',
  component: Test,
} as Meta

export const Default: StoryFn = () => <Test />
