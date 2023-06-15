import { Variants } from './Typography.constants'

export interface TypographyProps {
  children: React.ReactNode
  element?: keyof JSX.IntrinsicElements
  variant?: Variants
}
