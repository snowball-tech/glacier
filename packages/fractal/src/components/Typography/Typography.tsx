import { styled } from 'styled-components'

import { VARIANTS_MAPPING, Variants } from './Typography.constants'
import type { TypographyProps } from './Typography.types'

const DEFAULT_VARIANT = Variants.Body1

const StyledTypography = styled.div<TypographyProps>`
  font-family: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-font-family)`};
  font-size: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-font-size)`};
  font-weight: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-font-weight)`};

  line-height: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-line-height)`};
  letter-spacing: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-letter-spacing)`};

  text-decoration: ${({ variant = DEFAULT_VARIANT }) =>
    `var(--typography-${variant}-text-decoration)`};
`

export default function Typography({
  children,
  element,
  variant = DEFAULT_VARIANT,
  ...props
}: TypographyProps) {
  return (
    <StyledTypography
      as={element || VARIANTS_MAPPING[variant] || 'p'}
      variant={variant}
      {...props}
    >
      {children}
    </StyledTypography>
  )
}
