import type { Meta, StoryObj } from '@storybook/react'

import { Typography, Variants } from './index'

const meta = {
  component: Typography,
  parameters: {
    variant: Variants.Display1,
  },
  tags: ['autodocs'],
  title: 'Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Hello, world!',
    variant: Variants.Display1,
  },
}
