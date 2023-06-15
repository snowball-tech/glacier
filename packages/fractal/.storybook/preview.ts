import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { createGlobalStyle } from 'styled-components'

import '../src/styles/global.css'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: var(--font-family-normal);
    background-color: var(--color-brand-body);
  }
`

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
  ],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
